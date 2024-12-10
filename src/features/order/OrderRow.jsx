import { TableCell, TableRow } from "@/components/ui/table";
import { commafy, formatDateTime } from "@/utils/helpers";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

function OrderRow({ order }) {
  const {
    id,
    totalPrice,
    orderDate,
    user: { name },
    statusName,
  } = order;

  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{formatDateTime(orderDate)}</TableCell>
      <TableCell className="text-right">{commafy(totalPrice)} đ</TableCell>
      <TableCell>{statusName}</TableCell>
      <TableCell className="table-cell max-w-28">
        <div className="flex items-center justify-between gap-1">
          <Link
            to={`/app/order/${id}`}
            className="shrink-0 rounded-md p-1 transition-colors hover:bg-slate-300"
          >
            <HiOutlineInformationCircle className="h-6 w-6" />
          </Link>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default OrderRow;
