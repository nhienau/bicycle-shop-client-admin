import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useProduct } from "../productDetail/useProduct";
import SelectImage from "./SelectImage";

function UpdateProductDetailImage({ productDetail, children }) {
  const { data } = useProduct();
  const { productImages } = data;

  const imagesWithoutProductDetail = productImages.filter(
    (image) =>
      image.productDetail === null ||
      image.productDetail.id === productDetail.id,
  );

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="h-screen min-w-full sm:min-h-[16rem] md:min-w-[48rem] md:max-w-[50rem]">
        <DialogHeader>
          <DialogTitle>Cập nhật hình ảnh</DialogTitle>
          <DialogDescription>
            Chọn hình ảnh cần cập nhật cho thuộc tính{" "}
            <span className="font-bold text-slate-700">{"Test"}</span>
          </DialogDescription>
        </DialogHeader>
        {productDetail.productImage === null && (
          <h2>Thuộc tính sản phẩm chưa có hình ảnh</h2>
        )}
        <SelectImage
          productDetailId={productDetail.id}
          images={imagesWithoutProductDetail}
          currentImage={productDetail.productImage}
        />
      </DialogContent>
    </Dialog>
  );
}

export default UpdateProductDetailImage;
