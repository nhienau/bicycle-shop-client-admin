import SearchBar from "@/ui/SearchBar";
import { useProducts } from "./useProducts";
import { Link } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi2";

function ProductOperations() {
  const { isLoading, isFetching } = useProducts();
  return (
    <div className="flex items-center justify-between">
      <SearchBar
        queryParamKey="query"
        pageParamKey="page"
        inputPlaceholder="Tìm kiếm sản phẩm..."
        isLoading={isLoading || isFetching}
        className="w-80 max-w-80"
      />
      <Link
        to="/app/product/create"
        className="flex shrink-0 items-center justify-center gap-2 rounded-lg border-[1px] border-solid border-slate-400 bg-slate-100 px-3 py-2 text-slate-800 transition-colors hover:bg-slate-300"
      >
        <HiOutlinePlus className="h-5 w-5 shrink-0 text-slate-800" />
        <span>Thêm sản phẩm</span>
      </Link>
    </div>
  );
}

export default ProductOperations;
