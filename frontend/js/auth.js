/** Local-only password digest. This is not secure server authentication. */
function cartNovaLocalPasswordDigest(userId, email, password) {
  const input = `${userId}:${String(email).trim().toLowerCase()}:${String(password)}`;
  let a = 2166136261, b = 0x9e3779b9;
  for (let i = 0; i < input.length; i++) {
    const code = input.charCodeAt(i);
    a = Math.imul(a ^ code, 16777619);
    b = Math.imul(b ^ (code + i), 2246822519);
  }
  return `local-v1-${(a >>> 0).toString(16)}-${(b >>> 0).toString(16)}`;
}

/**
 * Browser-local account helpers.
 * Requires a server-backed authentication system before production use.
 */
const Auth = {
  STORAGE_KEY: "cartnova_user",
  USERS_KEY: "cartnova_users",

  getDefaultUsers() {
    // Accounts are created through registration; no credentials ship in source.
    return [];
  },

  getUsers() {
    const seed = this.getDefaultUsers();
    const safeSeed = () => seed.map(user => { const { password, ...safe } = user; return { ...safe, passwordHash: cartNovaLocalPasswordDigest(user.id, user.email, password) }; });
    try {
      const raw = localStorage.getItem(this.USERS_KEY);
      if (!raw) {
        const users = safeSeed();
        try { localStorage.setItem(this.USERS_KEY, JSON.stringify(users)); } catch (_) {}
        return users;
      }
      const users = JSON.parse(raw);
      if (!Array.isArray(users)) return safeSeed();
      let migrated = false;
      const safeUsers = users.filter(user => {
        const obsoleteSeed = String(user?.email || "").toLowerCase().endsWith([".", "local"].join(""));
        if (obsoleteSeed) migrated = true;
        return !obsoleteSeed;
      }).map(user => {
        if (!user || !Object.prototype.hasOwnProperty.call(user, "password")) return user;
        const { password, ...safe } = user;
        migrated = true;
        return { ...safe, passwordHash: cartNovaLocalPasswordDigest(user.id, user.email, password) };
      });
      if (migrated) this.saveUsers(safeUsers);
      return safeUsers;
    } catch (_) { return safeSeed(); }
  },

  saveUsers(users) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  },

  getCurrentUser() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      const user = raw ? JSON.parse(raw) : null;
      if (user && String(user.email || "").toLowerCase().endsWith([".", "local"].join(""))) {
        localStorage.removeItem(this.STORAGE_KEY);
        API.setToken(null);
        return null;
      }
      return user;
    } catch (_) { return null; }
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

    const id = Date.now();
    const normalizedEmail = email.trim().toLowerCase();
    const user = {
      id,
      name: name.trim(),
      email: normalizedEmail,
      passwordHash: cartNovaLocalPasswordDigest(id, normalizedEmail, password),
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
      (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.passwordHash === cartNovaLocalPasswordDigest(u.id, u.email, password)
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
    if (users[index].passwordHash !== cartNovaLocalPasswordDigest(users[index].id, users[index].email, currentPassword)) {
      throw new Error("Current password is incorrect.");
    }

    users[index].passwordHash = cartNovaLocalPasswordDigest(users[index].id, users[index].email, newPassword);
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
    const { password, passwordHash, ...safe } = user;
    return safe;
  },

  _persistSession(user) {
    const safe = this.sanitize(user);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(safe));
    // Local session marker; server authentication is not configured.
    API.setToken(`local-session-${safe.id}-${safe.role}`);
  }
};
