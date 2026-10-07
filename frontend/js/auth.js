/**
 * Auth helpers for Phase 1 (localStorage mock).
 * Will be replaced by JWT + Spring Security in Phase 6.
 */
const Auth = {
  STORAGE_KEY: "cartnova_user",
  USERS_KEY: "cartnova_users",

  getDefaultUsers() {
    return [
      {
        id: 1,
        name: "Admin User",
        email: "admin@cartnova.local",
        password: "Admin@123",
        phone: "9999999999",
        role: "ADMIN",
        address: {
          street: "1 Admin Lane",
          city: "Bengaluru",
          state: "Karnataka",
          postalCode: "560001",
          country: "India"
        }
      },
      {
        id: 2,
        name: "Demo Shopper",
        email: "user@cartnova.local",
        password: "User@123",
        phone: "9888888888",
        role: "USER",
        address: {
          street: "42 Market Street",
          city: "Pune",
          state: "Maharashtra",
          postalCode: "411001",
          country: "India"
        }
      }
    ];
  },

  getUsers() {
    const raw = localStorage.getItem(this.USERS_KEY);
    if (!raw) {
      const seed = this.getDefaultUsers();
      localStorage.setItem(this.USERS_KEY, JSON.stringify(seed));
      return seed;
    }
    return JSON.parse(raw);
  },

  saveUsers(users) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  },

  getCurrentUser() {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  },

  isLoggedIn() {
    return Boolean(this.getCurrentUser());
  },

  isAdmin() {
    const user = this.getCurrentUser();
    return user && user.role === "ADMIN";
  },

  register({ name, email, password, phone }) {
    const users = this.getUsers();
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error("An account with this email already exists.");
    }

    const user = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password,
      phone: phone.trim(),
      role: "USER",
      address: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "India"
      }
    };

    users.push(user);
    this.saveUsers(users);
    this._persistSession(user);
    return this.sanitize(user);
  },

  login(email, password) {
    const users = this.getUsers();
    const user = users.find(
      (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password
    );
    if (!user) throw new Error("Invalid email or password.");
    this._persistSession(user);
    return this.sanitize(user);
  },

  logout(redirect = true) {
    localStorage.removeItem(this.STORAGE_KEY);
    API.setToken(null);
    if (redirect) {
      const home = window.location.pathname.includes("/admin/") ? "../index.html" : "index.html";
      window.location.href = home;
    }
  },

  updateProfile(updates) {
    const current = this.getCurrentUser();
    if (!current) throw new Error("Please log in first.");

    const users = this.getUsers();
    const index = users.findIndex((u) => u.id === current.id);
    if (index === -1) throw new Error("User not found.");

    users[index] = {
      ...users[index],
      ...updates,
      address: {
        ...users[index].address,
        ...(updates.address || {})
      }
    };

    this.saveUsers(users);
    this._persistSession(users[index]);
    return this.sanitize(users[index]);
  },

  changePassword(currentPassword, newPassword) {
    const current = this.getCurrentUser();
    if (!current) throw new Error("Please log in first.");

    const users = this.getUsers();
    const index = users.findIndex((u) => u.id === current.id);
    if (index === -1) throw new Error("User not found.");
    if (users[index].password !== currentPassword) {
      throw new Error("Current password is incorrect.");
    }

    users[index].password = newPassword;
    this.saveUsers(users);
    this._persistSession(users[index]);
  },

  requireAuth(redirectTo = "login.html") {
    if (!this.isLoggedIn()) {
      const next = encodeURIComponent(window.location.pathname.split("/").pop() || "index.html");
      window.location.href = `${redirectTo}?next=${next}`;
      return false;
    }
    return true;
  },

  requireAdmin() {
    if (!this.isAdmin()) {
      window.location.href = "../login.html";
      return false;
    }
    return true;
  },

  sanitize(user) {
    const { password, ...safe } = user;
    return safe;
  },

  _persistSession(user) {
    const safe = this.sanitize(user);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(safe));
    // Demo token until real JWT is issued by backend
    API.setToken(`demo-token-${safe.id}-${safe.role}`);
  }
};
