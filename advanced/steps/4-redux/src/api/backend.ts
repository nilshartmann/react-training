const BACKEND_URL = "http://localhost:7000";

export async function fetchJson(path: string, token?: string) {
  const url = `${BACKEND_URL}${path}`;

  const options = token
    ? {
        headers: {
          Authorization: token,
        },
      }
    : undefined;

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Response from server not OK: ${response.status}`);
  }
  return await response.json();
}

type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

export async function sendJson(method: HttpMethod, path: string, token: string, payload = {}) {
  const url = `${BACKEND_URL}${path}`;

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(payload),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  if (!response.ok) {
    throw new Error(`Response from server not OK: ${response.status}`);
  }

  return await response.json();
}
