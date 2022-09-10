import { Link } from 'react-router-dom';
import { Products } from '../../../models/Products';
import AnimatedGridItem from '../../UI/Motion/AnimatedGridItem';

import ProductPreview from './ProductPreview';

interface ProductListProps {
  products: Products[] | undefined;
}

const ProductsList = ({ products }: ProductListProps) => {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-8 xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 gap-6">
      {products?.map((product, index) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <AnimatedGridItem>
            <ProductPreview
              productImageSrc={product.image_front_url}
              productName={product.product_name}
            />
          </AnimatedGridItem>
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
