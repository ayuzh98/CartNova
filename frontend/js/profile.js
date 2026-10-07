/**
 * Profile page: edit details, change password, order history shortcut.
 */
const ProfilePage = {
  init() {
    if (!Auth.requireAuth()) return;
    this.render();
    this.bindTabs();
  },

  bindTabs() {
    document.querySelectorAll("[data-profile-tab]").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const tab = link.dataset.profileTab;
        document.querySelectorAll("[data-profile-tab]").forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
        document.querySelectorAll("[data-tab-panel]").forEach((panel) => {
          panel.classList.toggle("hidden", panel.dataset.tabPanel !== tab);
        });
      });
    });
  },

  render() {
    const user = Auth.getCurrentUser();
    const root = document.getElementById("profileRoot");
    if (!root || !user) return;

    const orders = JSON.parse(localStorage.getItem(`cartnova_orders_${user.id}`) || "[]");

    root.innerHTML = `
      <div class="profile-layout">
        <aside class="panel profile-nav">
          <a href="#" class="active" data-profile-tab="details">Profile Details</a>
          <a href="#" data-profile-tab="password">Change Password</a>
          <a href="#" data-profile-tab="orders">Order History</a>
          <a href="#" id="logoutBtn">Logout</a>
        </aside>
        <div>
          <section class="panel" data-tab-panel="details">
            <h2>Profile Details</h2>
            <form id="profileForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <input id="name" value="${user.name || ""}" required />
                  <div class="form-error">Name is required</div>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input id="email" type="email" value="${user.email || ""}" disabled />
                </div>
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input id="phone" value="${user.phone || ""}" required />
                <div class="form-error">Phone is required</div>
              </div>
              <div class="form-group">
                <label for="street">Street</label>
                <input id="street" value="${user.address?.street || ""}" />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="city">City</label>
                  <input id="city" value="${user.address?.city || ""}" />
                </div>
                <div class="form-group">
                  <label for="state">State</label>
                  <input id="state" value="${user.address?.state || ""}" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="postalCode">Postal Code</label>
                  <input id="postalCode" value="${user.address?.postalCode || ""}" />
                </div>
                <div class="form-group">
                  <label for="country">Country</label>
                  <input id="country" value="${user.address?.country || "India"}" />
                </div>
              </div>
              <button class="btn btn-primary" type="submit">Save Changes</button>
            </form>
          </section>

          <section class="panel hidden" data-tab-panel="password">
            <h2>Change Password</h2>
            <form id="passwordForm">
              <div class="form-group">
                <label for="currentPassword">Current Password</label>
                <input id="currentPassword" type="password" required />
                <div class="form-error">Required</div>
              </div>
              <div class="form-group">
                <label for="newPassword">New Password</label>
                <input id="newPassword" type="password" minlength="6" required />
                <div class="form-error">Min 6 characters</div>
              </div>
              <div class="form-group">
                <label for="confirmPassword">Confirm New Password</label>
                <input id="confirmPassword" type="password" minlength="6" required />
                <div class="form-error">Passwords must match</div>
              </div>
              <button class="btn btn-primary" type="submit">Update Password</button>
            </form>
          </section>

          <section class="panel hidden" data-tab-panel="orders">
            <h2>Order History</h2>
            ${
              orders.length
                ? `<p style="color:var(--muted);margin-bottom:1rem">You have ${orders.length} order(s).</p>
                   <a class="btn btn-outline" href="orders.html">View All Orders</a>`
                : `<div class="empty-state"><p>No orders yet.</p><a class="btn btn-primary" href="products.html">Shop Now</a></div>`
            }
          </section>
        </div>
      </div>
    `;

    document.getElementById("logoutBtn").onclick = async (e) => {
      e.preventDefault();
      const ok = await UI.confirm({
        title: "Logout?",
        message: "You will need to sign in again to access your cart and orders.",
        confirmText: "Logout"
      });
      if (ok) Auth.logout(true);
    };

    document.getElementById("profileForm").onsubmit = (e) => {
      e.preventDefault();
      try {
        Auth.updateProfile({
          name: document.getElementById("name").value.trim(),
          phone: document.getElementById("phone").value.trim(),
          address: {
            street: document.getElementById("street").value.trim(),
            city: document.getElementById("city").value.trim(),
            state: document.getElementById("state").value.trim(),
            postalCode: document.getElementById("postalCode").value.trim(),
            country: document.getElementById("country").value.trim()
          }
        });
        UI.toast("Profile updated", "success");
        UI.mountChrome({ active: "profile" });
      } catch (err) {
        UI.toast(err.message, "error");
      }
    };

    document.getElementById("passwordForm").onsubmit = (e) => {
      e.preventDefault();
      const currentPassword = document.getElementById("currentPassword").value;
      const newPassword = document.getElementById("newPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const confirmGroup = document.getElementById("confirmPassword").closest(".form-group");

      if (newPassword !== confirmPassword) {
        confirmGroup.classList.add("invalid");
        return;
      }
      confirmGroup.classList.remove("invalid");

      try {
        Auth.changePassword(currentPassword, newPassword);
        e.target.reset();
        UI.toast("Password updated", "success");
      } catch (err) {
        UI.toast(err.message, "error");
      }
    };
  }
};

const AuthPages = {
  initLogin() {
    const form = document.getElementById("loginForm");
    if (!form) return;

    if (Auth.isLoggedIn()) {
      window.location.href = "index.html";
      return;
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      try {
        const user = Auth.login(email, password);
        UI.toast("Login successful", "success");
        const params = new URLSearchParams(window.location.search);
        const next = params.get("next");
        setTimeout(() => {
          if (user.role === "ADMIN") window.location.href = "admin/dashboard.html";
          else window.location.href = next || "index.html";
        }, 400);
      } catch (err) {
        UI.toast(err.message, "error");
      }
    });
  },

  initRegister() {
    const form = document.getElementById("registerForm");
    if (!form) return;

    if (Auth.isLoggedIn()) {
      window.location.href = "index.html";
      return;
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      const confirmGroup = document.getElementById("confirmPassword").closest(".form-group");
      if (password !== confirmPassword) {
        confirmGroup.classList.add("invalid");
        return;
      }
      confirmGroup.classList.remove("invalid");

      if (password.length < 6) {
        UI.toast("Password must be at least 6 characters", "error");
        return;
      }

      try {
        Auth.register({ name, email, password, phone });
        UI.toast("Account created successfully", "success");
        setTimeout(() => {
          window.location.href = "index.html";
        }, 400);
      } catch (err) {
        UI.toast(err.message, "error");
      }
    });
  }
};
