import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addProductCategory } from "@/services/apiProductCategory";

export function useAddProductCategory() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (productCategory) => addProductCategory(productCategory),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["productCategories"] });
      toast.success(`Thêm loại sản phẩm thành công`);
    },
    onError: (err) => {
      toast.error("Có lỗi xảy ra");
    },
  });

  return { mutate, isPending };
}
