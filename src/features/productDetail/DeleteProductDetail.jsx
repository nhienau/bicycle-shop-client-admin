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
import { useDeleteProductDetail } from "./useDeleteProductDetail";

function DeleteProductDetail({ productDetail, children }) {
  const { mutate, isPending } = useDeleteProductDetail();
  const { id, size, color } = productDetail;
  const detailStr = size === "" ? color : [size, color].join(" - ");

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Xoá thuộc tính</DialogTitle>
          <VisuallyHidden asChild>
            <DialogDescription>Xoá thuộc tính</DialogDescription>
          </VisuallyHidden>
        </DialogHeader>
        <p>
          Bạn có chắc chắn muốn xoá thuộc tính sản phẩm &quot;{detailStr}&quot;?
        </p>
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

export default DeleteProductDetail;
