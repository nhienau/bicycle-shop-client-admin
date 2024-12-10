import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateOrderStatus } from "@/services/apiOrder";

export function useUpdateOrderStatus() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ orderId, statusName }) =>
      updateOrderStatus(orderId, statusName),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["order", `${data.id}`] });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast.success(`Cập nhật trạng thái đơn hàng thành công`);
    },
    onError: (err) => {
      toast.error("Có lỗi xảy ra");
    },
  });

  return { mutate, isPending };
}
