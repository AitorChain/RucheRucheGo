import { ProductImageAndName } from '../../../../models/Products';
import { Card } from '../../../UI';

const ProductImage = ({ productImageSrc, productName }: ProductImageAndName) => {
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
