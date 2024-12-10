import { Input } from "@/components/ui/input";
import { useState } from "react";
import { HiOutlinePlus, HiOutlineTrash } from "react-icons/hi2";
import Spinner from "@/ui/Spinner";
import { useProduct } from "../productDetail/useProduct";
import { MAX_IMAGE_SIZE } from "@/utils/constants";
import { useAddProductImages } from "./useAddProductImages";

function AddImageForm() {
  const { data } = useProduct();
  const { mutate, isPending } = useAddProductImages();
  const [listFiles, setListFiles] = useState([crypto.randomUUID()]);
  const [error, setError] = useState("");

  const { id } = data;

  function handleAddInput() {
    setListFiles((list) => [...list, crypto.randomUUID()]);
  }

  function handleDeleteInput(id) {
    setListFiles((list) => list.filter((i) => i !== id));
  }

  async function onSubmit(e) {
    e.preventDefault();
    let fileElements = Array.from(e.target.elements)
      .filter((el) => el.type === "file")
      .map((el) => el.files);
    if (fileElements.some((el) => el.length === 0)) {
      setError("Chưa đính kèm hình ảnh");
      return;
    }
    fileElements = fileElements.map((el) => el[0]);
    const index = fileElements.findIndex((el) => el.size >= MAX_IMAGE_SIZE);
    if (index !== -1) {
      setError(
        `Tập tin đính kèm ${fileElements[index].name} có kích thước quá lớn (>10MB), vui lòng chọn ảnh có kích thước nhỏ hơn.`,
      );
      return;
    }
    setError("");
    mutate({ images: fileElements, productId: id, productDetails: [] });
  }

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        {listFiles.map((f) => (
          <div className="flex gap-2" key={f}>
            <Input key={f} type="file" accept=".png, .jpg, .jpeg" />
            <button
              type="button"
              onClick={() => handleDeleteInput(f)}
              disabled={listFiles.length === 1}
              className="rounded-md p-2 transition-colors hover:bg-slate-200 disabled:bg-slate-100"
            >
              <HiOutlineTrash className="h-5 w-5 disabled:text-slate-500" />
            </button>
          </div>
        ))}
        {error && <span className="text-red-700">{error}</span>}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleAddInput}
            // disabled={listFiles.length === remainImagesAllowed}
            disabled={false}
            className="flex items-center justify-center gap-1 rounded-md bg-slate-200 px-3 py-2 transition-colors hover:bg-slate-300 disabled:bg-slate-100 disabled:text-slate-500"
          >
            <HiOutlinePlus className="h-5 w-5" />
            <span>Thêm</span>
          </button>
          <button
            disabled={false}
            className="flex items-center justify-center gap-1 rounded-md bg-slate-600 px-3 py-2 text-slate-100 transition-colors hover:bg-slate-800 disabled:bg-slate-100 disabled:text-slate-500"
          >
            {isPending ? (
              <Spinner className="text-slate-500" />
            ) : (
              <span>Xác nhận</span>
            )}
          </button>
        </div>
      </form>
    </>
  );
}

export default AddImageForm;
