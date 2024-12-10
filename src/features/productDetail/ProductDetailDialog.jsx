import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductDetailForm from "./ProductDetailForm";

function ProductDetailDialog({ mode = "create", productDetail, children }) {
  const actionText = mode === "create" ? "Thêm" : "Cập nhật";

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{actionText} thuộc tính</DialogTitle>
          <DialogDescription>
            {actionText} thuộc tính cho sản phẩm{" "}
            <span className="font-bold text-slate-700">{"Test"}</span>
          </DialogDescription>
        </DialogHeader>
        <ProductDetailForm defaultValues={productDetail} mode={mode} />
      </DialogContent>
    </Dialog>
  );
}

export default ProductDetailDialog;
