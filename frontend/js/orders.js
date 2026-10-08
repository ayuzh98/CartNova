/**
 * Legacy locally stored order helpers.
 */
const OrdersPage = {
  cancellable: ["PLACED", "CONFIRMED"],

  init() {
    if (!Auth.requireAuth()) return;

    const params = new URLSearchParams(window.location.search);
    if (params.get("placed")) {
      UI.toast(`Order ${params.get("placed")} placed successfully`, "success");
    }

    this.render();
  },

  getOrders() {
    const user = Auth.getCurrentUser();
    return JSON.parse(localStorage.getItem(`cartnova_orders_${user.id}`) || "[]");
  },

  saveOrders(orders) {
    const user = Auth.getCurrentUser();
    localStorage.setItem(`cartnova_orders_${user.id}`, JSON.stringify(orders));
  },

  statusClass(status) {
    const s = status.toLowerCase();
    if (s === "delivered") return "delivered";
    if (s === "cancelled") return "cancelled";
    if (s.includes("ship")) return "shipped";
    return "";
  },

  render() {
    const root = document.getElementById("ordersRoot");
    if (!root) return;

    const orders = this.getOrders();
    if (!orders.length) {
      root.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📦</div>
          <h2>No orders yet</h2>
          <p>When you place an order, it will show up here with live status updates.</p>
          <a class="btn btn-primary" href="products.html">Start Shopping</a>
        </div>`;
      return;
    }

    root.innerHTML = `
      <div class="orders-list">
        ${orders
          .map(
            (order) => `
          <article class="order-card" data-order="${order.id}">
            <div class="order-top">
              <div>
                <h3>Order #${order.id}</h3>
                <p style="color:var(--muted)">${new Date(order.createdAt).toLocaleString()}</p>
              </div>
              <div style="text-align:right">
                <span class="status-pill ${this.statusClass(order.status)}">${order.status.replaceAll("_", " ")}</span>
                <div style="margin-top:0.4rem;font-weight:800">${formatINR(order.totalAmount)}</div>
              </div>
            </div>
            <div style="display:flex;gap:0.6rem;flex-wrap:wrap;margin-bottom:0.8rem">
              ${order.items
                .map(
                  (item) => `
                <div style="display:flex;gap:0.5rem;align-items:center;background:#f8fafc;border:1px solid var(--border);border-radius:10px;padding:0.4rem 0.6rem">
                  <img src="${item.image}" alt="" style="width:40px;height:40px;border-radius:8px;object-fit:cover" />
                  <span style="font-size:0.9rem">${item.name} × ${item.quantity}</span>
                </div>`
                )
                .join("")}
            </div>
            <div style="display:flex;justify-content:space-between;gap:0.8rem;flex-wrap:wrap;align-items:center">
              <span style="color:var(--muted)">Payment: <strong>${order.paymentMethod}</strong> · ${order.paymentStatus}</span>
              <div style="display:flex;gap:0.5rem">
                <button class="btn btn-outline btn-sm" data-view="${order.id}">View Details</button>
                ${
                  this.cancellable.includes(order.status)
                    ? `<button class="btn btn-ghost btn-sm" data-cancel="${order.id}">Cancel Order</button>`
                    : ""
                }
              </div>
            </div>
          </article>`
          )
          .join("")}
      </div>
      <div class="modal-backdrop" id="orderModal"></div>
    `;

    root.querySelectorAll("[data-view]").forEach((btn) => {
      btn.onclick = () => this.showDetails(btn.dataset.view);
    });

    root.querySelectorAll("[data-cancel]").forEach((btn) => {
      btn.onclick = async () => {
        const ok = await UI.confirm({
          title: "Cancel this order?",
          message: "Cancellation is only available before packing/shipping.",
          confirmText: "Cancel Order",
          danger: true
        });
        if (!ok) return;
        const orders = this.getOrders();
        const order = orders.find((o) => o.id === btn.dataset.cancel);
        if (!order || !this.cancellable.includes(order.status)) {
          UI.toast("This order can no longer be cancelled", "error");
          return;
        }
        order.status = "CANCELLED";
        order.paymentStatus = order.paymentStatus === "PAID" ? "REFUND_PENDING" : "CANCELLED";
        this.saveOrders(orders);
        UI.toast("Order cancelled", "success");
        this.render();
      };
    });
  },

  showDetails(orderId) {
    const order = this.getOrders().find((o) => o.id === orderId);
    const modal = document.getElementById("orderModal");
    if (!order || !modal) return;

    modal.innerHTML = `
      <div class="modal" style="width:min(100%,640px)">
        <h3>Order #${order.id}</h3>
        <p>${new Date(order.createdAt).toLocaleString()} · <strong>${order.status.replaceAll("_", " ")}</strong></p>
        <div style="margin-bottom:1rem">
          <strong>Delivery Address</strong>
          <p style="color:var(--muted);margin-top:0.35rem">
            ${order.address.fullName}, ${order.address.phone}<br/>
            ${order.address.street}, ${order.address.city}, ${order.address.state} ${order.address.postalCode}<br/>
            ${order.address.country}
          </p>
        </div>
        <div style="margin-bottom:1rem">
          ${order.items
            .map(
              (item) => `
            <div class="summary-row">
              <span>${item.name} × ${item.quantity}</span>
              <strong>${formatINR(item.price * item.quantity)}</strong>
            </div>`
            )
            .join("")}
          <div class="summary-row total"><span>Total</span><span>${formatINR(order.totalAmount)}</span></div>
        </div>
        <div class="modal-actions">
          <button class="btn btn-primary" id="closeOrderModal">Close</button>
        </div>
      </div>`;
    modal.classList.add("show");
    document.getElementById("closeOrderModal").onclick = () => modal.classList.remove("show");
    modal.onclick = (e) => {
      if (e.target === modal) modal.classList.remove("show");
    };
  }
};
