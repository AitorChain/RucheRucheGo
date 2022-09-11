import { Card } from '../../../UI';

type ProductImageProps = {
  image: string,
  name: string
}

const ProductImage = ({ image, name }: ProductImageProps) => {
  return (
    <Card>
      <img
        src={image}
        alt={name}
        className="object-cover w-screen h-96 md:w-96 md:h-96 rounded-md border-white border"
      />
    </Card>
  );
};

export default ProductImage;
