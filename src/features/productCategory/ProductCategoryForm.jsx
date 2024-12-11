import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormRow from "@/ui/FormRow";
import Input from "@/ui/Input";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useForm } from "react-hook-form";
import { useAddProductCategory } from "./useAddProductCategory";
import { useUpdateProductCategory } from "./useUpdateProductCategory";
import { useState } from "react";

function ProductCategoryForm({
  defaultValues = {},
  children,
  mode = "create",
}) {
  const { mutate: add, isPending: isAdding } = useAddProductCategory();
  const { mutate: update, isPending: isUpdating } = useUpdateProductCategory();
  const [open, setOpen] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues,
  });
  const { errors } = formState;

  const modeText = mode === "create" ? "Thêm" : "Cập nhật";

  function onSubmit(data) {
    const requestData = { ...data, status: true };
    if (mode === "create") {
      add(requestData, {
        onSuccess: () => {
          reset();
          setOpen(false);
        },
      });
    } else if (mode === "update") {
      update(requestData);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="h-screen min-w-full sm:h-auto sm:min-h-[16rem] md:min-w-[28rem] md:max-w-[32rem]">
        <DialogHeader>
          <DialogTitle>{modeText} loại sản phẩm</DialogTitle>
          <VisuallyHidden asChild>
            <DialogDescription>{modeText} loại sản phẩm</DialogDescription>
          </VisuallyHidden>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <FormRow label="Tên loại sản phẩm" error={errors?.name?.message}>
            <Input
              type="text"
              name="name"
              id="name"
              {...register("name", {
                required: "Tên loại sản phẩm không được bỏ trống",
              })}
              disabled={isAdding || isUpdating}
            />
          </FormRow>
          <div className="flex justify-end">
            <button
              className="rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5 disabled:bg-slate-200 disabled:text-slate-500"
              disabled={isAdding || isUpdating}
            >
              Xác nhận
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ProductCategoryForm;
