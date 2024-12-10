import { PAGE_SIZE } from "@/utils/constants";

export async function getOrders({
  statusName = "",
  customerName = "",
  fromDate = "",
  toDate = "",
  pageNumber = 1,
}) {
  const params = {
    statusName,
    customerName,
    fromDate,
    toDate,
    pageNumber,
    pageSize: PAGE_SIZE,
  };
  const queryString = "?" + new URLSearchParams(params).toString();
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/order${queryString}`,
    );
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function getOrder(id) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/order/${id}`);
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function updateOrderStatus(orderId, statusName) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/order/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId, statusName }),
    });
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}
