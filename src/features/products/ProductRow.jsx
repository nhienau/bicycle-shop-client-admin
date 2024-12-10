import { TableCell, TableRow } from "@/components/ui/table";
import { HiOutlinePencil, HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import DeleteProduct from "./DeleteProduct";

function ProductRow({ product }) {
  const { id, name, productCategory } = product;

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{productCategory.name}</TableCell>
      <TableCell className="table-cell max-w-28">
        <div className="flex items-center justify-between gap-1">
          <Link
            to={`/app/product/${id}`}
            className="shrink-0 rounded-md p-1 transition-colors hover:bg-slate-300"
          >
            <HiOutlinePencil className="h-6 w-6" />
          </Link>
          <DeleteProduct productId={id}>
            <button className="shrink-0 rounded-md p-1 transition-colors hover:bg-slate-300">
              <HiOutlineXMark className="h-6 w-6" />
            </button>
          </DeleteProduct>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default ProductRow;
