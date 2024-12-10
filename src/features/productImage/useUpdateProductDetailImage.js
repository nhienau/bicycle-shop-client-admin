import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useProduct } from "../productDetail/useProduct";
import { updateProductDetailImage } from "@/services/apiProduct";

export function useUpdateProductDetailImages() {
  const queryClient = useQueryClient();
  const { data } = useProduct();
  const { id } = data;

  const { mutate, isPending } = useMutation({
    mutationFn: ({ currentImageId, newImageId, productDetailId }) =>
      updateProductDetailImage({
        currentImageId,
        newImageId,
        productDetailId,
      }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["product", id] });
      toast.success(`Cập nhật thành công`);
    },
    onError: (err) => {
      toast.error("Có lỗi xảy ra");
    },
  });

  return { mutate, isPending };
}
