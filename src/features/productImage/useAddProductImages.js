import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useProduct } from "../productDetail/useProduct";
import { addProductImages } from "@/services/apiProduct";

export function useAddProductImages() {
  const queryClient = useQueryClient();
  const { data } = useProduct();
  const { id } = data;

  const { mutate, isPending } = useMutation({
    mutationFn: ({ images, productDetails, productId }) =>
      addProductImages(images, productDetails, productId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["product", id] });
      toast.success(`Thêm ảnh thành công`);
    },
    onError: (err) => {
      toast.error("Có lỗi xảy ra");
    },
  });

  return { mutate, isPending };
}
