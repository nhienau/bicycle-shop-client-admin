import { useState } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductCategoryChooser from "./ProductCategoryChooser";

function ProductCategoryDialog({
  children,
  currentCategory,
  onCategoryChosen,
  disabled,
}) {
  const [category, setCategory] = useState(currentCategory ?? {});

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chọn loại sản phẩm</DialogTitle>
          <VisuallyHidden asChild>
            <DialogDescription>Chọn loại sản phẩm</DialogDescription>
          </VisuallyHidden>
        </DialogHeader>
        {currentCategory && (
          <div>
            <p>
              Đang chọn:{" "}
              <span className="font-bold">{currentCategory.name}</span>
            </p>
          </div>
        )}
        <ProductCategoryChooser
          pageParam="category-page"
          queryParam="category-query"
          currentCategory={currentCategory}
          setCategory={setCategory}
        />
        <DialogFooter>
          <DialogClose asChild>
            <button
              type="button"
              className="rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5 disabled:bg-slate-200 disabled:text-slate-500"
              onClick={() => onCategoryChosen(category)}
              disabled={category === null || !Object.keys(category).length}
            >
              Xác nhận
            </button>
          </DialogClose>
          <DialogClose asChild>
            <button
              type="button"
              className="rounded-md border-[1px] border-solid border-slate-300 px-4 py-1.5"
            >
              Đóng
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ProductCategoryDialog;
