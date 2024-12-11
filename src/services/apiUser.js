import { PAGE_SIZE } from "@/utils/constants";

export async function getUsers({
  name = "",
  phoneNumber = "",
  pageNumber = 1,
}) {
  const params = {
    name: name ?? "",
    phoneNumber,
    pageNumber,
    pageSize: PAGE_SIZE,
  };
  const queryString = "?" + new URLSearchParams(params).toString();
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/user${queryString}`,
    );
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function getUser(id) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/user/${id}`);
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function deleteUser(id) {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/user/delete/${id}`,
      {
        method: "PUT",
      },
    );
    const data = await res.json();

    if (res.status === 404) {
      throw new Error(data.title);
    }

    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}
