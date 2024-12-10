import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getOrders } from "@/services/apiOrder";

export function useOrders() {
  const [searchParams] = useSearchParams();

  const statusName = searchParams.get("status-name") ?? "";
  const customerName = searchParams.get("customer-name") ?? "";
  const fromDate = searchParams.get("from") ?? "";
  const toDate = searchParams.get("to") ?? "";
  const pageNumber = Number.parseInt(searchParams.get("page")) || 1;

  const { isLoading, data, isFetching } = useQuery({
    queryKey: [
      "orders",
      statusName,
      customerName,
      fromDate,
      toDate,
      pageNumber,
    ],
    queryFn: () =>
      getOrders({ statusName, customerName, fromDate, toDate, pageNumber }),
    throwOnError: true,
  });
  return { isLoading, data, isFetching };
}
