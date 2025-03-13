export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const sendRequest = async (endpoint, method, body = null, token = "") => {
    const headers = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const res = await fetch(`${BASE_URL}/api/${endpoint}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Something went wrong");
    return data;
};