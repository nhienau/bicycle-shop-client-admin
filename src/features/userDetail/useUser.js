import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUser } from "@/services/apiUser";

export function useUser() {
  const { userId } = useParams();

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["user", Number(userId)],
    queryFn: () => getUser(Number(userId)),
    throwOnError: true,
  });
  return { isLoading, data, isFetching };
}
