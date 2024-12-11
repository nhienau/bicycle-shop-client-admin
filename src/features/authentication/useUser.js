import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../../services/apiAuth";

export function useUser() {
  const {
    isLoading,
    data: user,
    isFetching,
  } = useQuery({
    queryKey: ["user", "info"],
    queryFn: async () => {
      try {
        return await getUserInfo();
      } catch (e) {
        if (e.message === "User is not logged in.") {
          return null;
        }
      }
    },
    retry: false,
  });
  return {
    isLoading,
    user,
    isFetching,
  };
}
