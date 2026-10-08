/**
 * Admin dashboard for locally stored catalog and order data.
 */
const Admin = {
  initShell(active = "dashboard") {
    if (!Auth.requireAdmin()) return false;

    const sidebar = document.querySelector("[data-admin-sidebar]");
    if (sidebar) {
      sidebar.innerHTML = `
        <a class="logo" href="../index.html">
          <span class="logo-mark">CN</span>
          <span>CartNova</span>
        </a>
        <nav class="admin-nav">
          <a href="dashboard.html" class="${active === "dashboard" ? "active" : ""}">Dashboard</a>
          <a href="products.html" class="${active === "products" ? "active" : ""}">Products</a>
          <a href="orders.html" class="${active === "orders" ? "active" : ""}">Orders</a>
          <a href="users.html" class="${active === "users" ? "active" : ""}">Users</a>
          <a href="../index.html">View Store</a>
          <button type="button" id="adminLogout">Logout</button>
        </nav>
      `;
      document.getElementById("adminLogout").onclick = (e) => {
        Auth.logout(true);
      };
    }
    return true;
  },

  getAllOrders() {
    const users = Auth.getUsers();
    return users.flatMap((u) => {
      let orders = [];
      try { const stored = JSON.parse(localStorage.getItem(`cartnova_orders_${u.id}`) || "[]"); orders = Array.isArray(stored) ? stored : []; }
      catch (_) { UI.toast("Some locally saved order data could not be read.", "warning"); }
      return orders.map((o) => ({ ...o, customerName: u.name, customerEmail: u.email }));
    });
  },

  initDashboard() {
    if (!this.initShell("dashboard")) return;
    const orders = this.getAllOrders();
    const users = Auth.getUsers().filter((u) => u.role === "USER");
    const products = CartNovaData.products;
    const revenue = orders
      .filter((o) => o.status !== "CANCELLED")
      .reduce((sum, o) => sum + o.totalAmount, 0);
    const pending = orders.filter((o) => ["PLACED", "CONFIRMED"].includes(o.status)).length;
    const lowStock = products.filter((p) => p.stock < 30);

    document.getElementById("statUsers").textContent = users.length;
    document.getElementById("statProducts").textContent = products.length;
    document.getElementById("statOrders").textContent = orders.length;
    document.getElementById("statRevenue").textContent = formatINR(revenue);
    document.getElementById("statPending").textContent = pending;
    document.getElementById("statLowStock").textContent = lowStock.length;

    const lowStockBody = document.getElementById("lowStockBody");
    if (lowStockBody) {
      lowStockBody.innerHTML = lowStock
        .slice(0, 8)
        .map(
          (p) => `
          <tr>
            <td><img class="thumb" src="${UI.escapeHTML(p.image)}" alt="" width="64" height="64" loading="lazy" /></td>
            <td>${UI.escapeHTML(p.name)}</td>
            <td>${p.stock}</td>
            <td>${formatINR(getFinalPrice(p))}</td>
          </tr>`
        )
        .join("");
    }
  },

  initProducts() {
    if (!this.initShell("products")) return;
    const body = document.getElementById("adminProductsBody");
    if (!body) return;

    // Admin can soft-edit product list in localStorage overlay
    const overrides = JSON.parse(localStorage.getItem("cartnova_admin_products") || "null");
    const products = overrides || CartNovaData.products;

    const render = () => {
      const list = JSON.parse(localStorage.getItem("cartnova_admin_products") || "null") || CartNovaData.products;
      body.innerHTML = list
        .map(
          (p) => `
          <tr>
            <td><img class="thumb" src="${UI.escapeHTML(p.image)}" alt="" width="64" height="64" loading="lazy" /></td>
            <td>${UI.escapeHTML(p.name)}</td>
            <td>${UI.escapeHTML(getCategoryById(p.categoryId)?.name || "-")}</td>
            <td>${formatINR(getFinalPrice(p))}</td>
            <td>${p.stock}</td>
            <td>
              <div class="admin-actions">
                <button class="btn btn-ghost btn-sm" data-edit="${p.id}">Edit Stock</button>
                <button class="btn btn-ghost btn-sm" data-delete="${p.id}">Delete</button>
              </div>
            </td>
          </tr>`
        )
        .join("");

      body.querySelectorAll("[data-edit]").forEach((btn) => {
        btn.onclick = () => {
          const id = Number(btn.dataset.edit);
          const current = list.find((p) => p.id === id);
          const stock = prompt("Update stock quantity:", current.stock);
          if (stock === null) return;
          const next = list.map((p) => (p.id === id ? { ...p, stock: Number(stock) } : p));
          localStorage.setItem("cartnova_admin_products", JSON.stringify(next));
          // Also sync into in-memory catalog data for this session
          const idx = CartNovaData.products.findIndex((p) => p.id === id);
          if (idx >= 0) CartNovaData.products[idx].stock = Number(stock);
          UI.toast("Product updated", "success");
          render();
        };
      });

      body.querySelectorAll("[data-delete]").forEach((btn) => {
        btn.onclick = async () => {
          const ok = await UI.confirm({
            title: "Delete product?",
            message: "This removes the product from the local catalog.",
            confirmText: "Delete",
            danger: true
          });
          if (!ok) return;
          const id = Number(btn.dataset.delete);
          const next = list.filter((p) => p.id !== id);
          localStorage.setItem("cartnova_admin_products", JSON.stringify(next));
          CartNovaData.products = CartNovaData.products.filter((p) => p.id !== id);
          UI.toast("Product deleted", "success");
          render();
        };
      });
    };

    if (!overrides) {
      localStorage.setItem("cartnova_admin_products", JSON.stringify(products));
    }
    render();

    document.getElementById("addProductBtn")?.addEventListener("click", () => {
      const name = prompt("Product name:");
      if (!name) return;
      const price = Number(prompt("Price (INR):", "999") || 0);
      if (!Number.isFinite(price) || price <= 0) { UI.toast("Enter a valid price greater than zero.", "error"); return; }
      const list = JSON.parse(localStorage.getItem("cartnova_admin_products") || "[]");
      const product = {
        id: Date.now(),
        name,
        categoryId: 1,
        price,
        discount: 10,
        rating: 4.2,
        stock: 25,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        description: "Product added through the local catalog editor.",
        featured: false,
        trending: false,
        createdAt: new Date().toISOString().slice(0, 10)
      };
      list.unshift(product);
      CartNovaData.products.unshift(product);
      localStorage.setItem("cartnova_admin_products", JSON.stringify(list));
      UI.toast("Product created", "success");
      render();
    });
  },

  initOrders() {
    if (!this.initShell("orders")) return;
    const body = document.getElementById("adminOrdersBody");
    if (!body) return;

    const statuses = ["PLACED", "CONFIRMED", "PACKED", "SHIPPED", "OUT_FOR_DELIVERY", "DELIVERED", "CANCELLED"];

    const render = () => {
      const orders = this.getAllOrders().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      if (!orders.length) {
        body.innerHTML = `<tr><td colspan="6">No orders yet. Orders placed from the storefront will appear here.</td></tr>`;
        return;
      }

      body.innerHTML = orders
        .map(
          (o) => `
          <tr>
            <td>${UI.escapeHTML(o.id)}</td>
            <td>${UI.escapeHTML(o.customerName)}<br/><small style="color:var(--muted)">${UI.escapeHTML(o.customerEmail)}</small></td>
            <td>${formatINR(o.totalAmount)}</td>
            <td>${o.paymentStatus}</td>
            <td>
              <select data-status-order="${UI.escapeHTML(o.id)}" data-user="${UI.escapeHTML(o.userId)}">
                ${statuses.map((s) => `<option value="${s}" ${s === o.status ? "selected" : ""}>${s}</option>`).join("")}
              </select>
            </td>
            <td>${new Date(o.createdAt).toLocaleDateString()}</td>
          </tr>`
        )
        .join("");

      body.querySelectorAll("[data-status-order]").forEach((select) => {
        select.onchange = () => {
          const orderId = select.dataset.statusOrder;
          const userId = select.dataset.user;
          const key = `cartnova_orders_${userId}`;
          const list = JSON.parse(localStorage.getItem(key) || "[]");
          const order = list.find((o) => o.id === orderId);
          if (!order) return;
          order.status = select.value;
          localStorage.setItem(key, JSON.stringify(list));
          UI.toast("Order status updated", "success");
        };
      });
    };

    render();
  },

  initUsers() {
    if (!this.initShell("users")) return;
    const body = document.getElementById("adminUsersBody");
    if (!body) return;

    const users = Auth.getUsers();
    body.innerHTML = users
      .map(
        (u) => `
        <tr>
          <td>${u.name}</td>
          <td>${u.email}</td>
          <td>${u.phone || "-"}</td>
          <td><span class="status-pill">${u.role}</span></td>
          <td>${u.address?.city || "-"}</td>
        </tr>`
      )
      .join("");
  }
};
