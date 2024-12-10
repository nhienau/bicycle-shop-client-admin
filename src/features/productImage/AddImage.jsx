import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiOutlinePlus } from "react-icons/hi2";
import AddImageForm from "./AddImageForm";

function AddImage() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex shrink-0 items-center justify-center gap-2 rounded-lg border-[1px] border-solid border-slate-400 bg-slate-100 px-3 py-2 text-slate-800 transition-colors hover:bg-slate-300">
          <HiOutlinePlus className="h-5 w-5 shrink-0 text-slate-800" />
          <span>Thêm hình ảnh</span>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thêm hình ảnh</DialogTitle>
          <DialogDescription>
            Bạn đang thêm hình ảnh cho sản phẩm{" "}
            <span className="font-bold text-slate-700">{"Test"}</span>
          </DialogDescription>
        </DialogHeader>

        <AddImageForm />
      </DialogContent>
    </Dialog>
  );
}

export default AddImage;
