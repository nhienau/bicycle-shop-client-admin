import { TableCell, TableRow } from "@/components/ui/table";
import { HiOutlineInformationCircle, HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import DeleteUser from "../userDetail/DeleteUser";

function UserRow({ user }) {
  const { id, email, name, phoneNumber } = user;
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phoneNumber}</TableCell>
      <TableCell className="table-cell max-w-28">
        <div className="flex items-center justify-center gap-1">
          <Link
            to={`/app/user/${id}`}
            className="shrink-0 rounded-md p-1 transition-colors hover:bg-slate-300"
          >
            <HiOutlineInformationCircle className="h-6 w-6" />
          </Link>
          <DeleteUser user={user}>
            <button className="shrink-0 rounded-md p-1 transition-colors hover:bg-slate-300">
              <HiOutlineXMark className="h-6 w-6" />
            </button>
          </DeleteUser>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default UserRow;
