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
import { useProductCategories } from "./useProductCategories";
import ProductCategoryRow from "./ProductCategoryRow";

function ProductCategoryList() {
  const { isLoading, data, isFetching } = useProductCategories();

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
              <TableHead className="text-center">Tên loại sản phẩm</TableHead>
              <TableHead className="max-w-40 text-center"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {content.length === 0 ? (
              <TableRow>
                <TableCell colSpan={2} className="table-cell">
                  <span className="flex justify-center">
                    Không tìm thấy loại sản phẩm
                  </span>
                </TableCell>
              </TableRow>
            ) : (
              content.map((row) => (
                <ProductCategoryRow productCategory={row} key={row.id} />
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <PaginationGroup pageInfo={data} />
    </>
  );
}

export default ProductCategoryList;
