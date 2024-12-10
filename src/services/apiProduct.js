import { PAGE_SIZE } from "@/utils/constants";

export async function getProducts(name = "", pageNumber = 1) {
  const params = {
    name: name ?? "",
    pageNumber,
    pageSize: PAGE_SIZE,
  };
  const queryString = "?" + new URLSearchParams(params).toString();
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/product${queryString}`,
    );
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function getProduct(id) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/product/${id}`);
    const data = await res.json();
    return data;
  } catch (e) {
    return null;
  }
}

export async function addProductDetail(productDetail) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/productDetail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productDetail),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function updateProductDetail(productDetail) {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/productDetail/${productDetail.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productDetail),
      },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function deleteProductDetail(productDetailId) {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/productDetail/delete/${productDetailId}`,
      {
        method: "PUT",
      },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function addProductImages(images, productDetails, productId) {
  // productDetails: array of product detail IDs
  try {
    // const productDetailIds = Array.from({ length: images.length }, () => null);
    const formData = new FormData();
    images.forEach((image) => {
      formData.append("files", image);
    });
    // formData.append("productDetailIds", []);
    formData.append("productId", Number(productId));
    // console.log(productDetailIds);
    // console.log(formData);

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/productImage/upload`,
      {
        method: "POST",
        body: formData,
      },
    );
    return true;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function updateProductDetailImage({
  currentImageId,
  newImageId,
  productDetailId,
}) {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/productImage/updateProductDetail`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentImageId,
          newImageId,
          productDetailId,
        }),
      },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function detachProductDetailImage(productImageId) {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/productImage/detachProductDetail`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productImageId }),
      },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function deleteProductImages(ids) {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/productImage/delete`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: ids }),
      },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function deleteProduct(productId) {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/product/delete/${productId}`,
      {
        method: "PUT",
      },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function createProduct(product) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function updateProduct(product) {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/product/${product.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      },
    );
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}
