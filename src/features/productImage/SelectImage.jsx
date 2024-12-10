import { useState } from "react";
import SelectableImageItem from "./SelectableImageItem";
import { useUpdateProductDetailImages } from "./useUpdateProductDetailImage";
import Spinner from "@/ui/Spinner";
import DetachProductDetailImage from "./DetachProductDetailImage";

function SelectImage({ productDetailId, currentImage, images }) {
  const { mutate, isPending } = useUpdateProductDetailImages();
  const currentImageId = currentImage?.id;
  const [selectedId, setSelectedId] = useState(currentImageId || null);

  function handleUpdate() {
    if (currentImageId === selectedId) return;
    mutate({ currentImageId, newImageId: selectedId, productDetailId });
  }

  return (
    <>
      <div className="flex flex-col gap-8 overflow-y-auto sm:grid sm:grid-cols-2">
        {images.map((image) => (
          <SelectableImageItem
            image={image}
            key={image.id}
            selected={selectedId}
            onSelect={setSelectedId}
          />
        ))}
      </div>
      <div className="flex items-center justify-end gap-2">
        {currentImageId && (
          <DetachProductDetailImage imageId={currentImageId} />
        )}

        <button
          disabled={!selectedId || currentImageId === selectedId || isPending}
          className="flex items-center justify-center gap-2 rounded-md bg-slate-600 px-3 py-2 text-slate-100 transition-colors hover:bg-slate-800 disabled:bg-slate-100 disabled:text-slate-500"
          onClick={handleUpdate}
        >
          <span>Xác nhận</span>
          {isPending && <Spinner className="text-slate-500" />}
        </button>
      </div>
    </>
  );
}

export default SelectImage;
