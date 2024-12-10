import ImageItem from "@/ui/ImageItem";

function TitledImage({ image }) {
  const { size, color } = image.productDetail;
  const detailStr = size === "" ? color : [size, color].join(" - ");

  return (
    <div className="flex flex-col gap-4">
      <ImageItem>
        <ImageItem.Title>{detailStr}</ImageItem.Title>
        <ImageItem.Container>
          <ImageItem.Image url={image.url} />
        </ImageItem.Container>
      </ImageItem>
    </div>
  );
}

export default TitledImage;
