import { parseJwt } from "@/utils/helpers";

export async function login(email, password) {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (res.status === 401) {
    throw new Error("Login failed");
  }
  const data = await res.json();
  const { accessToken } = data;

  if (data.accessToken) {
    localStorage.setItem("jwtToken", accessToken);
    return parseJwt(accessToken);
  } else {
    throw new Error("Login failed");
  }
}

export async function getUserInfo() {
  const token = localStorage.getItem("jwtToken");
  if (!token) {
    throw new Error("User is not logged in.");
  }
  const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/userinfo`, {
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (data.status === 400) {
    return null;
  }
  return data;
}

export async function logout() {
  const token = localStorage.getItem("jwtToken");
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    localStorage.removeItem("jwtToken");
    const data = await res.text();
    return data;
  } catch (error) {
    console.error("Error during logout:", error);
  } finally {
    localStorage.removeItem("jwtToken");
  }
}
