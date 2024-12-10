import ProductList from "@/features/products/ProductList";
import ProductOperations from "@/features/products/ProductOperations";

function Product() {
  return (
    <>
      <h1 className="text-3xl font-bold">Sản phẩm</h1>
      <ProductOperations />
      <ProductList />
    </>
  );
}

export default Product;
