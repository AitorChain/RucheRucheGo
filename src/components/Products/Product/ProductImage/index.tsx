import { Card } from '../../../UI';

type ProductImageProps = {
  productImageSrc: string,
  productName: string
}

const ProductImage = ({ productImageSrc, productName }: ProductImageProps) => {
  return (
    <Card>
      <img
        src={productImageSrc}
        alt={productName}
        className="object-cover w-96 h-96 rounded-md border-white border"
      />
    </Card>
  );
};

export default ProductImage;
