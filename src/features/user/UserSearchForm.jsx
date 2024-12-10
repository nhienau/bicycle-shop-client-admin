import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { HiOutlineArrowPath, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import FormRow from "@/ui/FormRow";
import Input from "@/ui/Input";

function UserSearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      name: searchParams.get("name") || "",
      phoneNumber: searchParams.get("phone-number") || "",
    },
  });
  const { errors } = formState;

  function onSubmit(data) {
    const { name, phoneNumber } = data;

    searchParams.set("name", name.trim());
    searchParams.set("phone-number", phoneNumber.trim());
    setSearchParams(searchParams);
  }

  function resetParams() {
    reset({
      name: "",
      phoneNumber: "",
    });
    searchParams.set("name", "");
    searchParams.set("phone-number", "");
    setSearchParams(searchParams);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 md:grid md:grid-cols-3"
    >
      <FormRow label="Tên">
        <Input name="name" id="name" {...register("name")} />
      </FormRow>
      <FormRow label="Số điện thoại" error={errors.phoneNumber?.message}>
        <Input
          name="phoneNumber"
          id="phoneNumber"
          {...register("phoneNumber", {
            pattern: {
              value: /^0\d{9,11}$/,
              message: "Số điện thoại không hợp lệ",
            },
          })}
        />
      </FormRow>

      <div className="flex items-end justify-end gap-2">
        <button
          type="button"
          className="flex items-center gap-x-2 rounded-md border-[1px] border-solid border-slate-300 bg-white px-4 py-1.5"
          onClick={resetParams}
        >
          <HiOutlineArrowPath className="h-5 w-5 flex-shrink-0" />
          <span>Đặt lại</span>
        </button>
        <button
          type="submit"
          className="flex items-center gap-x-2 rounded-md border-[1px] border-solid border-slate-300 bg-white px-4 py-1.5"
        >
          <HiOutlineMagnifyingGlass className="h-5 w-5 flex-shrink-0" />
          <span>Tìm kiếm</span>
        </button>
      </div>
    </form>
  );
}

export default UserSearchForm;
