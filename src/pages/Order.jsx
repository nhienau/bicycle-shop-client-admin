import OrderFilter from "@/features/order/OrderFilter";
import OrderList from "@/features/order/OrderList";

function Order() {
  return (
    <>
      <h1 className="text-3xl font-bold">Đơn hàng</h1>
      <OrderFilter />
      <OrderList />
    </>
  );
}

export default Order;
