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
import { useDeleteProduct } from "./useDeleteProduct";

function DeleteProduct({ children, productId }) {
  const { isPending, mutate } = useDeleteProduct();

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Xoá sản phẩm</DialogTitle>
          <VisuallyHidden asChild>
            <DialogDescription>Xoá sản phẩm</DialogDescription>
          </VisuallyHidden>
        </DialogHeader>
        <p>Bạn có chắc chắn muốn xoá sản phẩm &quot;Test&quot;?</p>
        <DialogFooter>
          <button
            type="button"
            className="rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5 disabled:bg-slate-200 disabled:text-slate-500"
            onClick={() => mutate(productId)}
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

export default DeleteProduct;
