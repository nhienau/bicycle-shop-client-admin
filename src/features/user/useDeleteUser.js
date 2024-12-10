import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteUser } from "@/services/apiUser";

export function useDeleteUser() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id) => deleteUser(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.removeQueries({ queryKey: ["user", Number(data.id)] });
      queryClient.removeQueries({
        queryKey: ["orders", "user", Number(data.id)],
      });
      toast.success(`Xoá người dùng thành công`);
    },
    onError: (err) => {
      toast.error(
        "Người dùng không tồn tại hoặc không thể bị xoá do còn đơn hàng chưa xử lý",
      );
    },
  });

  return { mutate, isPending };
}
