import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteProduct } from "@/services/apiProduct";

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (productId) => deleteProduct(productId),
    onSuccess: (data) => {
      queryClient.removeQueries({ queryKey: ["product", data.id] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success(`Xoá sản phẩm thành công`);
    },
    onError: (err) => {
      toast.error("Có lỗi xảy ra");
    },
  });

  return { mutate, isPending };
}
