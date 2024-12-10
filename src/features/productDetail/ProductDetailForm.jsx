import { useForm } from "react-hook-form";
import { useAddProductDetail } from "./useAddProductDetail";
import { useUpdateProductDetail } from "./useUpdateProductDetail";
import FormRow from "@/ui/FormRow";
import Input from "@/ui/Input";

function ProductDetailForm({ defaultValues = {}, mode = "create" }) {
  const { mutate: create, isPending: isCreating } = useAddProductDetail();
  const { mutate: update, isPending: isUpdating } = useUpdateProductDetail();
  const { register, handleSubmit, formState } = useForm({
    defaultValues,
  });
  const { errors } = formState;

  function onSubmit(data) {
    const requestData = {
      ...data,
      price: Number(data.price),
      quantity: Number(data.quantity),
    };

    if (mode === "create") {
      create(requestData);
    } else {
      update(requestData);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 rounded-lg bg-white py-2"
    >
      <FormRow label="Kích cỡ" error={errors?.size?.message}>
        <Input
          type="text"
          name="size"
          id="size"
          {...register("size")}
          disabled={isCreating || isUpdating}
        />
      </FormRow>
      <FormRow label="Màu sắc" error={errors?.color?.message}>
        <Input
          type="text"
          name="color"
          id="color"
          {...register("color", {
            required: "Màu sắc không được để trống",
          })}
          disabled={isCreating || isUpdating}
        />
      </FormRow>
      <FormRow label="Giá" error={errors?.price?.message}>
        <Input
          type="text"
          name="price"
          id="price"
          {...register("price", {
            required: "Giá không được để trống",
            pattern: {
              value: /^\d+$/,
              message: "Số tiền không hợp lệ",
            },
            min: {
              value: 1000,
              message: "Số tiền ít nhất là 1,000 đ",
            },
          })}
          disabled={isCreating || isUpdating}
        />
      </FormRow>
      <FormRow label="Số lượng" error={errors?.quantity?.message}>
        <Input
          type="text"
          name="quantity"
          id="quantity"
          {...register("quantity", {
            required: "Số lượng không được để trống",
            pattern: {
              value: /^\d+$/,
              message: "Số lượng không hợp lệ",
            },
            min: {
              value: 0,
              message: "Số lượng phải lớn hơn hoặc bằng 0",
            },
          })}
          disabled={isCreating || isUpdating}
        />
      </FormRow>
      <div>
        <button
          className="rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5 disabled:bg-slate-200 disabled:text-slate-500"
          disabled={isCreating || isUpdating}
        >
          {mode === "create" ? "Tạo" : "Cập nhật"}
        </button>
      </div>
    </form>
  );
}

export default ProductDetailForm;
