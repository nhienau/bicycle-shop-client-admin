import SearchBar from "@/ui/SearchBar";
import { useProductCategories } from "./useProductCategories";
import ProductCategoryForm from "./ProductCategoryForm";
import { HiOutlinePlus } from "react-icons/hi2";

function ProductCategoryOperations() {
  const { isLoading, isFetching } = useProductCategories();

  return (
    <div className="flex items-center justify-between">
      <SearchBar
        queryParamKey="query"
        pageParamKey="page"
        inputPlaceholder="Tìm kiếm loại sản phẩm..."
        isLoading={isLoading || isFetching}
        className="w-80 max-w-80"
      />
      <ProductCategoryForm>
        <button className="flex shrink-0 items-center justify-center gap-2 rounded-lg border-[1px] border-solid border-slate-400 bg-slate-100 px-3 py-2 text-slate-800 transition-colors hover:bg-slate-300">
          <HiOutlinePlus className="h-5 w-5 shrink-0 text-slate-800" />
          <span>Thêm loại sản phẩm</span>
        </button>
      </ProductCategoryForm>
    </div>
  );
}

export default ProductCategoryOperations;
