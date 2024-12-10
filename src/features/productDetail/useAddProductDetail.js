import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addProductDetail } from "@/services/apiProduct";
import { useProduct } from "./useProduct";

export function useAddProductDetail() {
  const queryClient = useQueryClient();
  const { data } = useProduct();
  const { id } = data;

  const { mutate, isPending } = useMutation({
    mutationFn: (productDetail) =>
      addProductDetail({ ...productDetail, productId: id }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["product", id] });
      toast.success(`Thêm thuộc tính sản phẩm thành công`);
    },
    onError: (err) => {
      toast.error("Có lỗi xảy ra");
    },
  });

  return { mutate, isPending };
}
