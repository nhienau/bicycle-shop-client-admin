import Spinner from "@/ui/Spinner";
import { useOrder } from "./useOrder";
import PageNotFound from "@/pages/PageNotFound";
import { commafy, formatDateTime } from "@/utils/helpers";

function Orderer() {
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

  const {
    id,
    user: { name },
    totalPrice,
    address,
    phoneNumber,
    orderDate,
    statusName,
  } = data;

  return (
    <div className="grid grid-cols-[10rem_1fr] gap-3">
      <span>Mã đơn hàng</span>
      <span>{id}</span>
      <span>Thời gian đặt</span>
      <span>{formatDateTime(orderDate)}</span>
      <span>Người đặt</span>
      <span>{name}</span>
      <span>Địa chỉ nhận hàng</span>
      <span>{address}</span>
      <span>Số điện thoại</span>
      <span>{phoneNumber}</span>
      <span>Số tiền</span>
      <span>{commafy(totalPrice)} đ</span>
      <span>Trạng thái</span>
      <span>{statusName}</span>
    </div>
  );
}

export default Orderer;
