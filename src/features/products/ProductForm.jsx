import { useController, useForm } from "react-hook-form";
import FormRow from "@/ui/FormRow";
import Input from "@/ui/Input";
import ProductCategoryDialog from "../productCategory/ProductCategoryDialog";
import { useCreateProduct } from "./useCreateProduct";
import { useUpdateProduct } from "./useUpdateProduct";

function ProductForm({ defaultValues = {}, mode = "create" }) {
  const { mutate: create, isPending: isCreating } = useCreateProduct();
  const { mutate: update, isPending: isUpdating } = useUpdateProduct();
  const { register, handleSubmit, control, formState, reset } = useForm({
    defaultValues,
  });
  const { errors } = formState;

  const { field: productCategoryField } = useController({
    name: "productCategory",
    control,
    rules: {
      required: "Loại sản phẩm không được để trống",
    },
  });

  function onSubmit(data) {
    const {
      id,
      name,
      description,
      productCategory: { id: productCategoryId },
    } = data;
    const requestData = {
      id,
      name,
      description: description.trim(),
      productCategoryId,
    };

    if (mode === "create") {
      create(requestData, {
        onSuccess: () => {
          reset();
        },
      });
    } else {
      update(requestData);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 rounded-lg bg-white p-4"
    >
      <FormRow
        label="Tên sản phẩm"
        error={errors?.name?.message}
        className="md:grid md:grid-cols-[10rem,1fr,1.2fr] md:items-center md:gap-4"
      >
        <Input
          type="text"
          name="name"
          id="name"
          {...register("name", {
            required: "Tên sản phẩm không được để trống",
            validate: (value) =>
              value.trim() !== "" || "Tên sản phẩm không được để trống",
          })}
          disabled={isCreating || isUpdating}
        />
      </FormRow>
      <FormRow
        label="Mô tả"
        error={errors?.description?.message}
        className="md:grid md:grid-cols-[10rem,1fr,1.2fr] md:items-center md:gap-4"
      >
        <Input
          type="text"
          name="description"
          id="description"
          {...register("description")}
          disabled={isCreating || isUpdating}
        />
      </FormRow>

      <div className="flex flex-col gap-2 md:grid md:grid-cols-[10rem,1fr,1.2fr] md:items-center md:gap-4">
        <label htmlFor="productCategory" className="font-semibold">
          Loại sản phẩm
        </label>
        <div className="flex items-center gap-3">
          <Input
            type="text"
            name="productCategory"
            id="productCategory"
            className="grow"
            value={
              productCategoryField.value ? productCategoryField.value.name : ""
            }
            onChange={productCategoryField.onChange}
            onBlur={productCategoryField.onBlur}
            ref={productCategoryField.ref}
            readOnly
            disabled={isCreating || isUpdating}
          />
          <ProductCategoryDialog
            currentCategory={productCategoryField.value}
            onCategoryChosen={productCategoryField.onChange}
          >
            <button
              type="button"
              className="rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5 disabled:bg-slate-200 disabled:text-slate-500"
              disabled={isCreating || isUpdating}
            >
              Chọn
            </button>
          </ProductCategoryDialog>
        </div>
        {errors?.productCategory?.message && (
          <span className="text-red-700">
            {errors?.productCategory?.message}
          </span>
        )}
      </div>
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

export default ProductForm;
