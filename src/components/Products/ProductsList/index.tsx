import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import ProductPreview from '../Product/ProductPreview';

interface IProductsList {
  products: {
    id: number,
    image_front_url: string,
    product_name: string
  }[] | undefined
}


const ProductsList: FC<IProductsList> = ({products}) => {
  return (
    <div 
      className='grid grid-cols-1 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 gap-6'>
      {
        products?.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductPreview
              productImageSrc={product.image_front_url}
              productName={product.product_name} />
          </Link>
        ))
      }
    </div>
  );
};

export default ProductsList;