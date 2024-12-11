import Spinner from "@/ui/Spinner";
import { useUser } from "./useUser";
import PageNotFound from "@/pages/PageNotFound";
import UserOrders from "./UserOrders";
import UserOrderFilter from "./UserOrderFilter";

function UserOrdersTab() {
  const { isLoading, data, isFetching } = useUser();

  if (isLoading || isFetching)
    return (
      <div className="flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );

  if (!data || data?.error) {
    return <PageNotFound />;
  }

  const { name } = data;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Lịch sử đơn hàng của {name}</h2>
      <UserOrderFilter />
      <UserOrders />
    </div>
  );
}

export default UserOrdersTab;
