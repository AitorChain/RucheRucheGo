import { Link, Outlet } from 'react-router-dom';
import { createProductShortAdapter } from '../../../adapters/products.adapter';
import { ProductShort } from '../../../models/API/OpenFood.types';

import ProductPreview from './ProductPreview/ProductPreview';

interface ProductListProps {
  products: ProductShort[] | undefined;
}

const ProductsList = ({ products }: ProductListProps) => {

  const adaptAndShowProducts = () => (
    products?.map((product, index) => {

      const adaptedProductShort = createProductShortAdapter(product);

      return (
        <ProductPreview
          key={index}
          {...adaptedProductShort}
        />
      );})
  );


  return (
    <div className="grid grid-cols-1 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-8">
      {adaptAndShowProducts()}
    </div>
  );
};

export default ProductsList;
