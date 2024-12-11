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
import { useUsers } from "./useUsers";
import UserRow from "./UserRow";

function UserList() {
  const { isLoading, data, isFetching } = useUsers();

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
              <TableHead className="text-center">Tên</TableHead>
              <TableHead className="text-center">Email</TableHead>
              <TableHead className="text-center">Số điện thoại</TableHead>
              <TableHead className="max-w-40 text-center"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {content.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="table-cell">
                  <span className="flex justify-center">
                    Không tìm thấy khách hàng
                  </span>
                </TableCell>
              </TableRow>
            ) : (
              content.map((user) => <UserRow user={user} key={user.id} />)
            )}
          </TableBody>
        </Table>
      </div>
      <PaginationGroup pageInfo={data} />
    </>
  );
}

export default UserList;
