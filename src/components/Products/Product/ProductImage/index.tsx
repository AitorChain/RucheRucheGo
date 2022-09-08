import { FC } from 'react';
import { Card } from '../../../UI';

interface IProductImage {
  productImageSrc: string,
  productName: string,
}

const ProductImage: FC<IProductImage> = ({productImageSrc, productName}) => {

  return (
    <Card>
      <img 
        src={productImageSrc}
        alt={productName}
        className='object-cover w-auto h-auto lg:w-96 lg:h-96 rounded-md border-white border' />
    </Card>
  );
};

export default ProductImage;