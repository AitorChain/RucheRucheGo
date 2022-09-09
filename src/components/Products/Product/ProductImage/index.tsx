import { FC } from 'react';
import { ProductImageAndName } from '../../../../models/Products';
import { Card } from '../../../UI';

const ProductImage: FC<ProductImageAndName> = ({productImageSrc, productName}) => {

  return (
    <Card>
      <img 
        src={productImageSrc}
        alt={productName}
        className='object-cover w-96 h-96 rounded-md border-white border' />
    </Card>
  );
};

export default ProductImage;