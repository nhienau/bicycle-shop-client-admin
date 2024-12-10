import OptimizedImage from "@/ui/OptimizedImage";
import { useCheckboxes } from "@/contexts/CheckboxesContext";

function ImageItem({ children }) {
  return children;
}

function Title({ children }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}

function Container({ children }) {
  return (
    <div className="relative aspect-video overflow-visible rounded-lg bg-slate-50 p-4 shadow-md">
      {children}
    </div>
  );
}

function Image({ url }) {
  return (
    <a href={url} target="_blank">
      <OptimizedImage
        url={url}
        className="aspect-video h-full w-full object-contain"
      />
    </a>
  );
}

function Checkbox({ imageId }) {
  const { add, remove, checked } = useCheckboxes();

  function handleChange(e) {
    const checked = e.target.checked;
    checked ? add(imageId) : remove(imageId);
  }

  return (
    <div className="absolute left-[-1rem] top-[-1rem] flex items-center justify-center rounded-full bg-slate-200 p-2 transition-colors has-[input:hover]:bg-slate-400">
      <input
        type="checkbox"
        checked={checked.includes(imageId)}
        onChange={handleChange}
      />
    </div>
  );
}

ImageItem.Title = Title;
ImageItem.Container = Container;
ImageItem.Image = Image;
ImageItem.Checkbox = Checkbox;

export default ImageItem;
