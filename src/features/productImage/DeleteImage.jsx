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
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useDeleteProductImages } from "./useDeleteProductImages";

function DeleteImage({ images, children }) {
  const { mutate, isPending } = useDeleteProductImages();

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Xoá hình ảnh</DialogTitle>
          <VisuallyHidden asChild>
            <DialogDescription>Xoá hình ảnh</DialogDescription>
          </VisuallyHidden>
          <p>
            Bạn có chắc chắn muốn xoá{" "}
            <span className="font-bold text-slate-800">
              {images.length} hình ảnh
            </span>
            ? Thao tác này không thể hoàn tác.
          </p>
        </DialogHeader>
        <DialogFooter className="justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary" disabled={isPending}>
              Huỷ
            </Button>
          </DialogClose>
          <Button
            type="button"
            disabled={isPending}
            onClick={() => mutate(images)}
          >
            Xác nhận
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteImage;
