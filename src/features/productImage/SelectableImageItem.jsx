import OptimizedImage from "@/ui/OptimizedImage";

function SelectableImageItem({ image, selected, onSelect }) {
  const { id, url } = image;
  return (
    <button
      className={`relative aspect-video overflow-visible rounded-lg ${selected === id ? "bg-slate-300" : "bg-slate-100"} p-4 shadow-md transition-colors`}
      onClick={() => onSelect(id)}
    >
      <OptimizedImage
        url={url}
        className="aspect-video h-full w-full object-contain"
      />
    </button>
  );
}

export default SelectableImageItem;
