import AddImage from "./AddImage";
import ImageList from "./ImageList";

function ImageTab() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-end">
        <AddImage />
      </div>
      <ImageList />
    </div>
  );
}

export default ImageTab;
