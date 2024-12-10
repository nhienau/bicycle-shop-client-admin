import ProductCategoryList from "@/features/productCategory/ProductCategoryList";
import ProductCategoryOperations from "@/features/productCategory/ProductCategoryOperations";

function ProductCategory() {
  return (
    <>
      <h1 className="text-3xl font-bold">Loại sản phẩm</h1>
      <ProductCategoryOperations />
      <ProductCategoryList />
    </>
  );
}

export default ProductCategory;
