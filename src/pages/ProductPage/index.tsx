import { useEffect, useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useParams } from 'react-router-dom';

import { useGetProductByIdQuery } from '../../services/OpenFood';
import { createProductAdapter } from '../../adapters/product.adapter';

import Navbar from '../../components/Navbar';
import { LoadingSpinner, BackgroundColorEffect } from '../../components/UI';
import { PageTitle } from '../../components/UI/Typography';
import { ProductDetails, ProductImage } from '../../components/Products/Product';
import productPlaceholder from '../../assets/product-placeholder.jpg';
import { AdaptedProduct } from '../../models/UI/Products.types';

const ProductPage = () => {
  const [product, setProduct] = useState<AdaptedProduct | null>(null);
  const { id } = useParams();

  const { data, error, isLoading } = useGetProductByIdQuery(id ?? skipToken);

  useEffect(() => {
    if (data?.product) {
      const adaptedProduct = createProductAdapter(data.product);
      setProduct(adaptedProduct);
    }
    
  }, [data]);

  return (
    <div>
      <BackgroundColorEffect color="bg-purple" height="h-56" />
      <Navbar showSearchBar={false} whiteLogo />
      <PageTitle className="text-white text-center">
        {product?.name ? product.name.toUpperCase() : 'PRODUIT SANS NOM' }
      </PageTitle>
      <main>
        {isLoading && <LoadingSpinner randomLoader />}
        {error && <h2 className="text-2xl">Il y a eu un erreur. Réesayez plus tard.</h2>}
        {product && (
          <div className="flexCenter flex-col lg:flex lg:items-start lg:flexCenterStart lg:flex-row gap-8 lg:gap-28 mb-8 ">
            <ProductImage
              productImageSrc={product.image || productPlaceholder}
              productName={product.name}
            />
            <ProductDetails product={product} />
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductPage;
