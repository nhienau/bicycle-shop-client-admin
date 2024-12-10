import { TableCell, TableRow } from "@/components/ui/table";
import { HiOutlinePencil, HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import DeleteProductCategory from "./DeleteProductCategory";
import ProductCategoryForm from "./ProductCategoryForm";

function ProductCategoryRow({ productCategory }) {
  const { id, name } = productCategory;

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell className="table-cell max-w-28">
        <div className="flex items-center justify-between gap-1">
          <ProductCategoryForm mode="update" defaultValues={productCategory}>
            <button className="shrink-0 rounded-md p-1 transition-colors hover:bg-slate-300">
              <HiOutlinePencil className="h-6 w-6" />
            </button>
          </ProductCategoryForm>
          <DeleteProductCategory productCategory={productCategory}>
            <button className="shrink-0 rounded-md p-1 transition-colors hover:bg-slate-300">
              <HiOutlineXMark className="h-6 w-6" />
            </button>
          </DeleteProductCategory>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default ProductCategoryRow;
