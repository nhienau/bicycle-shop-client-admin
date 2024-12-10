import { Image } from "lucide-react";
import { HiOutlinePencil, HiOutlineXMark } from "react-icons/hi2";
import UpdateProductDetailImage from "../productImage/UpdateProductDetailImage";
import ProductDetailDialog from "./ProductDetailDialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { commafy } from "@/utils/helpers";
import DeleteProductDetail from "./DeleteProductDetail";

function ProductDetailRow({ productDetail }) {
  const { id, size, color, price, quantity } = productDetail;
  return (
    <TableRow>
      <TableCell>{size || "(Không)"}</TableCell>
      <TableCell>{color}</TableCell>
      <TableCell className="text-right">{`${commafy(price)} đ`}</TableCell>
      <TableCell>{quantity}</TableCell>
      <TableCell className="flex max-w-20 items-center justify-center">
        <div className="flex max-w-20 items-center justify-between gap-1">
          <UpdateProductDetailImage productDetail={productDetail}>
            <button className="shrink-0 rounded-md p-1 transition-colors hover:bg-slate-300">
              <Image className="h-6 w-6" />
            </button>
          </UpdateProductDetailImage>

          <ProductDetailDialog productDetail={productDetail} mode="update">
            <button className="shrink-0 rounded-md p-1 transition-colors hover:bg-slate-300">
              <HiOutlinePencil className="h-6 w-6" />
            </button>
          </ProductDetailDialog>

          <DeleteProductDetail productDetail={productDetail}>
            <button className="shrink-0 rounded-md p-1 transition-colors hover:bg-slate-300">
              <HiOutlineXMark className="h-6 w-6" />
            </button>
          </DeleteProductDetail>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default ProductDetailRow;
