import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useDeleteProductCategory } from "./useDeleteProductCategory";

function DeleteProductCategory({ children, productCategory }) {
  const { id, name } = productCategory;

  const { isPending, mutate } = useDeleteProductCategory();

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Xoá loại sản phẩm</DialogTitle>
          <VisuallyHidden asChild>
            <DialogDescription>Xoá loại sản phẩm</DialogDescription>
          </VisuallyHidden>
        </DialogHeader>
        <p>Bạn có chắc chắn muốn xoá loại sản phẩm &quot;{name}&quot;?</p>
        <DialogFooter>
          <button
            type="button"
            className="rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5 disabled:bg-slate-200 disabled:text-slate-500"
            onClick={() => mutate(id)}
            disabled={isPending}
          >
            Xác nhận
          </button>
          <DialogClose asChild>
            <button
              type="button"
              className="rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5"
              disabled={isPending}
            >
              Đóng
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteProductCategory;
