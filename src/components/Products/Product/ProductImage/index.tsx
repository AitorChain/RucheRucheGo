import React, { FC } from 'react';
import Card from '../../../UI/Card';

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
        className='object-cover sm:w-96 sm:h-96 rounded-md border-white border' />
    </Card>
  );
};

export default ProductImage;