import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getProductCategories } from "@/services/apiProductCategory";

export function useProductCategories() {
  const [searchParams] = useSearchParams();

  const pageNo = Number.parseInt(searchParams.get("page")) || 1;
  const query = searchParams.get("query") ?? "";

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["productCategories", query, pageNo],
    queryFn: () => getProductCategories(query, pageNo),
    throwOnError: true,
  });
  return { isLoading, data, isFetching };
}
