import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../services/apiAuth";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: (data) => {
      // queryClient.setQueriesData({ queryKey: ["user"] }, null);
      queryClient.clear();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isPending };
}
