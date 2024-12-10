import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "@/services/apiProduct";

export function useProducts() {
  const [searchParams] = useSearchParams();

  const pageNo = Number.parseInt(searchParams.get("page")) || 1;
  const query = searchParams.get("query") ?? "";

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["products", query, pageNo],
    queryFn: () => getProducts(query, pageNo),
    throwOnError: true,
  });
  return { isLoading, data, isFetching };
}
