import Spinner from "@/ui/Spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PaginationGroup from "@/ui/PaginationGroup";
import { useUserOrders } from "./useUserOrders";
import UserOrderRow from "./UserOrderRow";

function UserOrders() {
  const { isLoading, data, isFetching } = useUserOrders();

  if (isLoading || isFetching)
    return (
      <div className="flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );

  const { content } = data;

  return (
    <>
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <Table className="text-base">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Mã</TableHead>
              <TableHead className="text-center">Thời gian đặt</TableHead>
              <TableHead className="text-center">Số tiền</TableHead>
              <TableHead className="text-center">Trạng thái</TableHead>
              <TableHead className="max-w-40 text-center"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {content.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="table-cell">
                  <span className="flex justify-center">
                    Không tìm thấy đơn hàng
                  </span>
                </TableCell>
              </TableRow>
            ) : (
              content.map((row) => <UserOrderRow order={row} key={row.id} />)
            )}
          </TableBody>
        </Table>
      </div>
      <PaginationGroup pageInfo={data} />
    </>
  );
}

export default UserOrders;
