import UserList from "@/features/user/UserList";
import UserSearchForm from "@/features/user/UserSearchForm";

function User() {
  return (
    <>
      <h1 className="text-3xl font-bold">Khách hàng</h1>
      <UserSearchForm />
      <UserList />
    </>
  );
}

export default User;
