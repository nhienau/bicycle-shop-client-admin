import Spinner from "@/ui/Spinner";
import SearchBar from "@/ui/SearchBar";
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

function ProductCategoryChooser({
  pageParam = "page",
  queryParam = "query",
  currentCategory,
  setCategory,
}) {
  const { isLoading, data, isFetching } = useProductCategories(
    pageParam,
    queryParam,
  );

  if (isLoading || isFetching)
    return (
      <div className="flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );

  const { content } = data;

  return (
    <>
      <div className="flex items-center">
        <SearchBar
          queryParamKey={queryParam}
          pageParamKey={pageParam}
          inputPlaceholder="Tìm kiếm loại sản phẩm..."
          isLoading={isLoading || isFetching}
          className="w-80 max-w-80"
        />
      </div>
      <div>
        <Table className="text-base">
          <TableHeader>
            <TableRow>
              <TableHead className="w-6"></TableHead>
              <TableHead>Tên</TableHead>
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
                <TableRow
                  key={row.id}
                  className="has-[input:checked]:bg-slate-200"
                >
                  <TableCell className="w-6">
                    <input
                      type="radio"
                      name="productCategory"
                      id={row.id}
                      defaultChecked={currentCategory?.id === row.id}
                      onChange={() => setCategory(row)}
                    />
                  </TableCell>
                  <TableCell>
                    <label htmlFor={row.id}>{row.name}</label>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <PaginationGroup pageInfo={data} />
    </>
  );
}

export default ProductCategoryChooser;
