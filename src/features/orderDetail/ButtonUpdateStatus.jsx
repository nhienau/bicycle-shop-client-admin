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
import { useUpdateOrderStatus } from "./useUpdateOrderStatus";
import {
  NEXT_ORDER_STATUS,
  ORDER_STATUSES_WITHOUT_NEXT,
} from "@/utils/constants";
import { useForm } from "react-hook-form";
import { useState } from "react";

function ButtonUpdateStatus({ orderId, currentStatus, children }) {
  const { mutate, isPending } = useUpdateOrderStatus();
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);

  if (ORDER_STATUSES_WITHOUT_NEXT.includes(currentStatus)) {
    return null;
  }

  const statusObj = NEXT_ORDER_STATUS.find(
    (status) => status.current === currentStatus,
  );

  function onSubmit(data) {
    const { status: statusName } = data;

    mutate(
      { orderId, statusName },
      {
        onSettled: () => {
          setOpen(false);
        },
      },
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <DialogHeader>
            <DialogTitle>Cập nhật trạng thái cho đơn hàng</DialogTitle>
            <VisuallyHidden asChild>
              <DialogDescription>
                Cập nhật trạng thái cho đơn hàng
              </DialogDescription>
            </VisuallyHidden>
          </DialogHeader>
          <p>
            Trạng thái của đơn hàng #{orderId} là{" "}
            <span className="font-bold">"{currentStatus}"</span>. Cập nhật trạng
            thái đơn hàng thành:
          </p>
          <select
            id="status"
            name="status"
            {...register("status")}
            className="rounded-md border-[1px] border-solid border-slate-300 bg-slate-100 px-3 py-2"
          >
            {statusObj?.next.map((status) => (
              <option value={status.value} key={status.value}>
                {status.label}
              </option>
            ))}
          </select>
          <DialogFooter>
            <button
              type="submit"
              className="rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5 disabled:bg-slate-200 disabled:text-slate-500"
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
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ButtonUpdateStatus;
