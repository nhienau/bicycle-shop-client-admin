import Error from "@/ui/Error";

function PageNotFound() {
  return (
    <Error
      title="Không tìm thấy trang"
      message="Trang bạn yêu cầu có thể đã bị xoá hoặc không tồn tại."
    />
  );
}

export default PageNotFound;
