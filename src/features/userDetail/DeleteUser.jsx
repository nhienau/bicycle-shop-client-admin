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
import { useDeleteUser } from "../user/useDeleteUser";
import { useState } from "react";

function DeleteUser({ children, user }) {
  const { isPending, mutate } = useDeleteUser();
  const { id, name } = user;
  const [open, setOpen] = useState(false);

  function onConfirm() {
    mutate(id, {
      onSettled: () => {
        setOpen(false);
      },
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Xoá người dùng</DialogTitle>
          <VisuallyHidden asChild>
            <DialogDescription>Xoá người dùng</DialogDescription>
          </VisuallyHidden>
        </DialogHeader>
        <p>
          Bạn có chắc chắn muốn xoá người dùng &quot;{name}&quot;? Thao tác này
          không thể hoàn tác.
        </p>
        <DialogFooter>
          <button
            type="button"
            className="rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5 disabled:bg-slate-200 disabled:text-slate-500"
            onClick={onConfirm}
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

export default DeleteUser;
