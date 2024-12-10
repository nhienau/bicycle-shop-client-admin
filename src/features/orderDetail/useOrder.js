import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOrder } from "@/services/apiOrder";

export function useOrder() {
  const { orderId } = useParams();

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrder(orderId),
    throwOnError: true,
  });
  return { isLoading, data, isFetching };
}
