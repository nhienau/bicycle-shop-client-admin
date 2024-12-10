import { PAGE_SIZE } from "@/utils/constants";

export async function getProductCategories(name = "", pageNumber = 1) {
  const params = {
    name: name ?? "",
    pageNumber,
    pageSize: PAGE_SIZE,
  };
  const queryString = "?" + new URLSearchParams(params).toString();
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/productCategory${queryString}`,
    );
    const data = await res.json();
    const { statusCode, result, message } = data;
    if (statusCode === 200) {
      return result;
    } else {
      throw new Error(message);
    }
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function addProductCategory(productCategory) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/productCategory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productCategory),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function updateProductCategory(productCategory) {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/productCategory/${productCategory.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productCategory),
      },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function deleteProductCategory(id) {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/productCategory/delete/${id}`,
      {
        method: "PATCH",
      },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}
