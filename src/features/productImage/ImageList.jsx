import PageNotFound from "@/pages/PageNotFound";
import Spinner from "@/ui/Spinner";
import { useProduct } from "../productDetail/useProduct";
import TitledImage from "./TitledImage";
import { CheckboxesProvider } from "@/contexts/CheckboxesContext";
import ImageOperations from "./ImageOperations";
import CheckableImageItem from "./CheckableImageItem";

function ImageList() {
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

  const { productImages } = data;

  const imagesWithProductDetail = productImages.filter(
    (pi) => pi.productDetail !== null,
  );
  const imagesWithoutProductDetail = productImages.filter(
    (pi) => pi.productDetail === null,
  );
  const imagesId = imagesWithoutProductDetail.map((i) => i.id);

  return (
    <>
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2">
        {imagesWithProductDetail.map((image) => (
          <TitledImage image={image} key={image.id} />
        ))}
      </div>
      {imagesWithoutProductDetail.length > 0 && (
        <>
          <h2 className="text-xl font-bold">Hình ảnh khác</h2>
          <CheckboxesProvider allElements={imagesId}>
            <ImageOperations />
            <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2">
              {imagesWithoutProductDetail.map((image) => (
                <CheckableImageItem image={image} key={image.id} />
              ))}
            </div>
          </CheckboxesProvider>
        </>
      )}
    </>
  );
}

export default ImageList;
