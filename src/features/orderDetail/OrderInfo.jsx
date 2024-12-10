import Spinner from "@/ui/Spinner";
import { useOrder } from "./useOrder";
import PageNotFound from "@/pages/PageNotFound";
import Orderer from "./Orderer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import OrderItem from "./OrderItem";
import ButtonUpdateStatus from "./ButtonUpdateStatus";
import { HiOutlinePencil } from "react-icons/hi2";

function OrderInfo() {
  const { isLoading, isFetching, data } = useOrder();

  if (isLoading || isFetching) {
    return (
      <div className="flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!data || data?.error) {
    return <PageNotFound />;
  }

  const { id, orderDetails, statusName } = data;

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Đơn hàng #{id}</h1>
        <ButtonUpdateStatus orderId={id} currentStatus={statusName}>
          <button className="flex shrink-0 items-center justify-center gap-2 rounded-lg border-[1px] border-solid border-slate-400 bg-slate-100 px-3 py-2 text-slate-800 transition-colors hover:bg-slate-300">
            <HiOutlinePencil className="h-5 w-5 shrink-0 text-slate-800" />
            <span>Cập nhật</span>
          </button>
        </ButtonUpdateStatus>
      </div>
      <Orderer />
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <Table className="text-base">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Tên</TableHead>
              <TableHead className="text-center">Giá</TableHead>
              <TableHead className="text-center">Số lượng</TableHead>
              <TableHead className="text-center">Thành tiền</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orderDetails.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="table-cell">
                  <span className="flex justify-center">asdf</span>
                </TableCell>
              </TableRow>
            ) : (
              orderDetails.map((row) => (
                <OrderItem item={row} key={row.productDetailId} />
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default OrderInfo;
