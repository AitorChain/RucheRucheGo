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
        className="object-cover w-screen h-96 md:min-w-96 lg:w-96 rounded-sm border-white border"
      />
    </Card>
  );
};

export default ProductImage;
