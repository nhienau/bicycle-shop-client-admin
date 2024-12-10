import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteProductDetail } from "@/services/apiProduct";
import { useProduct } from "./useProduct";

export function useDeleteProductDetail() {
  const queryClient = useQueryClient();
  const { data } = useProduct();
  const { id } = data;

  const { mutate, isPending } = useMutation({
    mutationFn: (productDetailId) => deleteProductDetail(productDetailId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["product", id] });
      toast.success(`Xoá thuộc tính sản phẩm thành công`);
    },
    onError: (err) => {
      toast.error("Có lỗi xảy ra");
    },
  });

  return { mutate, isPending };
}
