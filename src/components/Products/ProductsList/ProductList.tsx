import { Link } from 'react-router-dom';
import { createProductShortAdapter } from '../../../adapters/products.adapter';
import { ProductShort } from '../../../models/API/OpenFood.types';

import ProductPreview from './ProductPreview/ProductPreview';

interface ProductListProps {
  products: ProductShort[] | undefined;
}

const ProductsList = ({ products }: ProductListProps) => {

  const adaptAndShowProducts = () => (
    products?.map((product) => {

      const adaptedProductShort = createProductShortAdapter(product);

      return (
        <Link to={`/product/${adaptedProductShort.id}`}
          key={adaptedProductShort.id}>
          <ProductPreview
            key={adaptedProductShort.id}
            {...adaptedProductShort}
          />
        </Link>
      );})
  );


  return (
    <div className="grid grid-cols-1 2xl:grid-cols-7 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 gap-8">
      {adaptAndShowProducts()}
    </div>
  );
};

export default ProductsList;
