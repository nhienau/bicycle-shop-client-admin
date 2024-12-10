import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useProduct } from "../productDetail/useProduct";
import { detachProductDetailImage } from "@/services/apiProduct";

export function useDetachProductDetailImage() {
  const queryClient = useQueryClient();
  const { data } = useProduct();
  const { id } = data;

  const { mutate, isPending } = useMutation({
    mutationFn: (productImageId) => detachProductDetailImage(productImageId),
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
