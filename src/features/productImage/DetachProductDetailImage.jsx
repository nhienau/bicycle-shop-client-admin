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
import { useDetachProductDetailImage } from "./useDetachProductDetailImage";

function DetachProductDetailImage({ imageId }) {
  const { mutate, isPending } = useDetachProductDetailImage();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          disabled={isPending}
          className="flex items-center justify-center gap-2 rounded-md bg-slate-600 px-3 py-2 text-slate-100 transition-colors hover:bg-slate-800 disabled:bg-slate-100 disabled:text-slate-500"
        >
          Gỡ hình ảnh
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Gỡ hình ảnh</DialogTitle>
          <VisuallyHidden asChild>
            <DialogDescription>Gỡ hình ảnh</DialogDescription>
          </VisuallyHidden>
        </DialogHeader>
        <p>
          Bạn có chắc chắn muốn gỡ hình ảnh hiện tại khỏi thuộc tính sản phẩm X?
        </p>
        <DialogFooter>
          <button
            type="button"
            className="rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5 disabled:bg-slate-200 disabled:text-slate-500"
            onClick={() => mutate(imageId)}
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

export default DetachProductDetailImage;
