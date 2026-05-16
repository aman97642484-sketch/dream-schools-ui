import axios from "axios";

// Default to same-origin TanStack server routes under /api/public so forms work
// in the Lovable preview without needing the Express backend running.
// Set VITE_API_URL (e.g. http://localhost:5000/api) to point at the Express backend instead.
export const API_URL =
  (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_API_URL) ||
  "/api/public";

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10_000,
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("dps_token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/** GET helper that returns `fallback` if the request fails (e.g. backend offline). */
export async function getOrFallback<T>(path: string, fallback: T): Promise<T> {
  try {
    const { data } = await api.get(path);
    // List endpoints return { items, total, ... } — unwrap if the consumer expects an array
    if (Array.isArray(fallback) && data && Array.isArray((data as any).items)) {
      return (data as any).items as T;
    }
    return data as T;
  } catch {
    return fallback;
  }
}
