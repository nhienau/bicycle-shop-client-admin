import Spinner from "@/ui/Spinner";
import { useUser } from "./useUser";
import PageNotFound from "@/pages/PageNotFound";
import { useEffect } from "react";
import { TITLE_POSTFIX } from "@/utils/constants";

function UserInfo() {
  const { isLoading, data, isFetching } = useUser();

  useEffect(() => {
    document.title = data
      ? `${data.name} - Khách hàng - ${TITLE_POSTFIX}`
      : TITLE_POSTFIX;
  }, [data]);

  if (isLoading || isFetching)
    return (
      <div className="flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );

  if (!data || data?.error) {
    return <PageNotFound />;
  }

  const { email, name, address, phoneNumber } = data;

  return (
    <div className="grid grid-cols-[10rem_1fr] gap-3">
      <span>Tên</span>
      <span>{name}</span>
      <span>Email</span>
      <span>{email}</span>
      <span>Số điện thoại</span>
      <span>{phoneNumber}</span>
      <span>Địa chỉ</span>
      <span>{address}</span>
    </div>
  );
}

export default UserInfo;
