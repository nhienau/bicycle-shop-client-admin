import Spinner from "@/ui/Spinner";
import { useProduct } from "./useProduct";
import PageNotFound from "@/pages/PageNotFound";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ProductDetailRow from "./ProductDetailRow";

function ProductDetailList() {
  const { isLoading, isFetching, data } = useProduct();

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

  const { productDetails, productImages } = data;
  productImages.forEach((image) => {
    const productDetail = productDetails.find(
      (pd) => image.productDetailId === pd.id,
    );
    if (productDetail) {
      productDetail.productImage = image;
    }
  });

  return (
    <div className="rounded-lg bg-white p-4 shadow-sm">
      <Table className="text-base">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Kích thước</TableHead>
            <TableHead className="text-center">Màu sắc</TableHead>
            <TableHead className="text-center">Giá</TableHead>
            <TableHead className="text-center">Số lượng</TableHead>
            <TableHead className="text-center"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productDetails.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="table-cell">
                <span className="flex justify-center">
                  Không tìm thấy thuộc tính sản phẩm
                </span>
              </TableCell>
            </TableRow>
          ) : (
            productDetails.map((row) => (
              <ProductDetailRow productDetail={row} key={row.id} />
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default ProductDetailList;
