import ImageItem from "@/ui/ImageItem";

function CheckableImageItem({ image }) {
  const { id, url } = image;

  return (
    <ImageItem>
      <ImageItem.Container>
        <ImageItem.Image url={url} />
        <ImageItem.Checkbox imageId={id} />
      </ImageItem.Container>
    </ImageItem>
  );
}

export default CheckableImageItem;
