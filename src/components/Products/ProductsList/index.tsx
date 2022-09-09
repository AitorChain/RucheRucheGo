import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Products } from '../../../models/Products';

import ProductPreview from './ProductPreview';


interface ProductListProps {
  products: Products[] | undefined
}

const ProductsList: FC<ProductListProps> = ({products}) => {
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