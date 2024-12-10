import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "@/services/apiProduct";

export function useProduct() {
  const { productId } = useParams();

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["product", Number(productId)],
    queryFn: () => getProduct(Number(productId)),
    throwOnError: true,
  });
  return { isLoading, data, isFetching };
}
