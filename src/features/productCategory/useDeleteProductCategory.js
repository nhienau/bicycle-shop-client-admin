import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteProductCategory } from "@/services/apiProductCategory";

export function useDeleteProductCategory() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (productCategory) => deleteProductCategory(productCategory),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["productCategories"] });
      toast.success(`Xoá loại sản phẩm thành công`);
    },
    onError: (err) => {
      toast.error("Có lỗi xảy ra");
    },
  });

  return { mutate, isPending };
}
