export const fetchJson = async (url, signal) => {
  const res = await fetch(url, { signal });
  if (!res.ok) {
    throw new Error(`${res.status}: ${res.statusText}`);
  }
  return await res.json();
};
