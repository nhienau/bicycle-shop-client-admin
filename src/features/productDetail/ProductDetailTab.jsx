import { HiOutlinePlus } from "react-icons/hi2";
import ProductDetailDialog from "./ProductDetailDialog";
import ProductDetailList from "./ProductDetailList";

function ProductDetailTab() {
  return (
    <div className="mx-auto my-0 flex max-w-[85rem] flex-col gap-8">
      <div className="flex justify-end">
        <ProductDetailDialog>
          <button className="flex shrink-0 items-center justify-center gap-2 rounded-lg border-[1px] border-solid border-slate-400 bg-slate-100 px-3 py-2 text-slate-800 transition-colors hover:bg-slate-300">
            <HiOutlinePlus className="h-5 w-5 shrink-0 text-slate-800" />
            <span>Thêm thuộc tính sản phẩm</span>
          </button>
        </ProductDetailDialog>
      </div>
      <ProductDetailList />
    </div>
  );
}

export default ProductDetailTab;
