import { useCheckboxes } from "@/contexts/CheckboxesContext";
import { HiOutlineTrash } from "react-icons/hi2";
import DeleteImage from "./DeleteImage";

function ImageOperations() {
  const { selectAll, clearAll, checked, numElements } = useCheckboxes();

  function handleChange(e) {
    const checked = e.target.checked;
    checked ? selectAll() : clearAll();
  }

  return (
    <div
      className={`flex flex-col gap-2 md:flex-row md:items-center ${numElements === 0 ? "md:justify-end" : "md:justify-between"}`}
    >
      {numElements !== 0 && (
        <div>
          <input
            type="checkbox"
            onChange={handleChange}
            checked={checked.length !== 0}
            className="mr-2"
          />
          <span>
            {checked.length === 0
              ? "Chọn tất cả"
              : `Đã chọn ${checked.length}/${numElements} hình ảnh`}
          </span>
        </div>
      )}
      <DeleteImage images={checked}>
        <button
          className="flex shrink-0 items-center justify-center gap-2 rounded-lg border-[1px] border-solid border-red-400 bg-red-300 px-3 py-2 text-slate-900 transition-colors hover:bg-red-500 hover:text-slate-100 disabled:border-red-200 disabled:bg-red-100 disabled:text-slate-900"
          disabled={checked.length === 0}
        >
          <HiOutlineTrash className="h-5 w-5 shrink-0" />
          <span>Xoá</span>
        </button>
      </DeleteImage>
    </div>
  );
}

export default ImageOperations;
