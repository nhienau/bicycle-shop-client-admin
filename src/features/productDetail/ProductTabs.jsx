import { useSearchParams } from "react-router-dom";
import { useProduct } from "./useProduct";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductDetailTab from "./ProductDetailTab";
import ImageTab from "../productImage/ImageTab";
import PageNotFound from "@/pages/PageNotFound";
import Spinner from "@/ui/Spinner";
import ProductForm from "../products/ProductForm";

function ProductTabs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, isFetching, data } = useProduct();

  const tabParam = searchParams.get("tab");
  const defaultTab =
    tabParam && ["info", "detail", "images"].includes(tabParam.toLowerCase())
      ? tabParam.toLowerCase()
      : "info";

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

  function setSelectedTab(value) {
    setSearchParams({
      tab: value,
    });
  }

  return (
    <Tabs defaultValue={defaultTab}>
      <TabsList>
        <TabsTrigger value="info" onClick={() => setSelectedTab("info")}>
          Thông tin
        </TabsTrigger>
        <TabsTrigger value="detail" onClick={() => setSelectedTab("detail")}>
          Chi tiết sản phẩm
        </TabsTrigger>
        <TabsTrigger value="images" onClick={() => setSelectedTab("images")}>
          Hình ảnh
        </TabsTrigger>
      </TabsList>
      <TabsContent value="info">
        <ProductForm defaultValues={data} mode="update" />
      </TabsContent>
      <TabsContent value="detail">
        <ProductDetailTab />
      </TabsContent>
      <TabsContent value="images">
        <ImageTab />
      </TabsContent>
    </Tabs>
  );
}

export default ProductTabs;
