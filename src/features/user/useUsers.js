import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getUsers } from "@/services/apiUser";

export function useUsers() {
  const [searchParams] = useSearchParams();

  const pageNumber = Number.parseInt(searchParams.get("page")) || 1;
  const name = searchParams.get("name") ?? "";
  const phoneNumber = searchParams.get("phone-number") ?? "";

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["users", name, phoneNumber, pageNumber],
    queryFn: () => getUsers({ name, phoneNumber, pageNumber }),
    throwOnError: true,
  });
  return { isLoading, data, isFetching };
}
