const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getText(path) {
    const res = await fetch(`${BASE_URL}${path}`);
    if (!res.ok) throw new Error("Request failed");
    return res.text();
}
