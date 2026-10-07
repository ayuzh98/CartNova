/**
 * Central API helper.
 * Phase 1: localStorage-backed mock APIs.
 * Phase 2+: swap BASE_URL to Spring Boot (http://localhost:8080).
 */
const API = {
  BASE_URL: "http://localhost:8080/api",
  USE_MOCK: true,

  getToken() {
    return localStorage.getItem("cartnova_token");
  },

  setToken(token) {
    if (token) localStorage.setItem("cartnova_token", token);
    else localStorage.removeItem("cartnova_token");
  },

  async request(path, options = {}) {
    if (this.USE_MOCK) {
      throw new Error("Mock mode: use domain modules instead of live API.");
    }

    const headers = {
      "Content-Type": "application/json",
      ...(options.headers || {})
    };

    const token = this.getToken();
    if (token) headers.Authorization = `Bearer ${token}`;

    const response = await fetch(`${this.BASE_URL}${path}`, {
      ...options,
      headers
    });

    if (response.status === 401) {
      Auth.logout(false);
      window.location.href = "login.html";
      throw new Error("Unauthorized");
    }

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.message || "Request failed");
    }
    return data;
  }
};
