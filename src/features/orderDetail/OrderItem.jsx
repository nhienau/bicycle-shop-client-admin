import Spinner from "@/ui/Spinner";
import { useOrder } from "./useOrder";
import PageNotFound from "@/pages/PageNotFound";
import { TableCell, TableRow } from "@/components/ui/table";
import { commafy } from "@/utils/helpers";
import OptimizedImage from "@/ui/OptimizedImage";

function OrderItem({ item }) {
  const {
    quantity,
    price,
    productDetail: {
      size,
      color,
      product: { name },
      productImage,
    },
  } = item;

  const detailStr = size === "" ? color : [size, color].join(" - ");

  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-4">
          {productImage ? (
            <OptimizedImage
              url={productImage.url}
              className="h-16 w-16 object-cover object-center"
            />
          ) : (
            <img
              src="/placeholder.svg"
              className="h-16 w-16 object-cover object-center"
              alt={detailStr}
            />
          )}
          <div>
            <p>{name}</p>
            <p>Phân loại: {detailStr}</p>
          </div>
        </div>
      </TableCell>
      <TableCell className="text-right">{`${commafy(price)} đ`}</TableCell>
      <TableCell className="text-right">{quantity}</TableCell>
      <TableCell className="text-right">{`${commafy(price * quantity)} đ`}</TableCell>
    </TableRow>
  );
}

export default OrderItem;
