import { authHeaders } from "./crmAuth";

const BASE = "/api";

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
      ...(options.headers as Record<string, string> || {}),
    },
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `HTTP ${res.status}`);
  }
  return res.json();
}

export const api = {
  login: (email: string, password: string) =>
    request<{ token: string; email: string }>("/crm/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  getDiagnostics: () => request<any[]>("/crm/diagnostics"),
  getDiagnostic: (id: number) => request<any>(`/crm/diagnostics/${id}`),
  updateDiagnosticStatus: (id: number, status: string) =>
    request<any>(`/crm/diagnostics/${id}`, { method: "PATCH", body: JSON.stringify({ status }) }),
  deleteDiagnostic: (id: number) =>
    request<any>(`/crm/diagnostics/${id}`, { method: "DELETE" }),

  getGeoContent: () => request<any[]>("/crm/geo-content"),
  getGeoContentByCode: (code: string) => request<any>(`/crm/geo-content/${code}`),
  saveGeoContent: (data: any) =>
    request<any>("/crm/geo-content", { method: "POST", body: JSON.stringify(data) }),
  updateGeoContent: (code: string, data: any) =>
    request<any>(`/crm/geo-content/${code}`, { method: "PUT", body: JSON.stringify(data) }),
  deleteGeoContent: (code: string) =>
    request<any>(`/crm/geo-content/${code}`, { method: "DELETE" }),

  getSettings: () => request<Record<string, string>>("/crm/settings"),
  saveSettings: (data: Record<string, string>) =>
    request<any>("/crm/settings", { method: "PUT", body: JSON.stringify(data) }),

  submitDiagnostic: (data: any) =>
    request<any>("/diagnostic", { method: "POST", body: JSON.stringify(data) }),
};
