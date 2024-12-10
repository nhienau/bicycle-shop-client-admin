import Spinner from "@/ui/Spinner";
import { useProducts } from "./useProducts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ProductRow from "./ProductRow";
import PaginationGroup from "@/ui/PaginationGroup";

function ProductList() {
  const { isLoading, data, isFetching } = useProducts();

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
              <TableHead className="text-center">Loại</TableHead>
              <TableHead className="max-w-40 text-center"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {content.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} className="table-cell">
                  <span className="flex justify-center">
                    Không tìm thấy sản phẩm
                  </span>
                </TableCell>
              </TableRow>
            ) : (
              content.map((row) => <ProductRow product={row} key={row.id} />)
            )}
          </TableBody>
        </Table>
      </div>
      <PaginationGroup pageInfo={data} />
    </>
  );
}

export default ProductList;
