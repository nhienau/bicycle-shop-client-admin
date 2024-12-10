import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getOrders } from "@/services/apiOrder";

export function useUserOrders() {
  const { userId } = useParams();
  const [searchParams] = useSearchParams();

  const statusName = searchParams.get("status-name") ?? "";
  const fromDate = searchParams.get("from") ?? "";
  const toDate = searchParams.get("to") ?? "";
  const pageNumber = Number.parseInt(searchParams.get("page")) || 1;

  const { isLoading, data, isFetching } = useQuery({
    queryKey: [
      "orders",
      "user",
      Number(userId),
      statusName,
      fromDate,
      toDate,
      pageNumber,
    ],
    queryFn: () =>
      getOrders({ statusName, userId, fromDate, toDate, pageNumber }),
    throwOnError: true,
  });
  return { isLoading, data, isFetching };
}
