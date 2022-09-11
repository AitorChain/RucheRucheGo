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


  //With this use effect we adapt the product from the API Model to the UI Model
  useEffect(() => {
    if (data?.product) {
      const adaptedProduct = createProductAdapter(data.product);
      setProduct(adaptedProduct);
    }
    
  }, [data]);

  const pageTitle = (
    <PageTitle className="text-white text-center">
      {product?.name ? product.name.toUpperCase() : 'PRODUIT SANS NOM' }
    </PageTitle>
  );


  //I've use the non-null assertion because we will call it using products && 'pageInformation'
  const pageInformation = (
    <div className="flexCenter flex-col lg:flex lg:items-start lg:flexCenterStart lg:flex-row gap-8 lg:gap-28 mb-8 ">
      <ProductImage
        image={product?.image || productPlaceholder}
        name={product?.name || 'Produit sans nom'}
      />
      <ProductDetails product={product!} />
    </div>
  );

  return (
    <div>
      <BackgroundColorEffect color="bg-purple" height="h-56" />
      <Navbar showSearchBar={false} whiteLogo />
      {product?.name && pageTitle}
      <main>
        {isLoading && <LoadingSpinner randomLoader />}
        {error && <h2 className="text-2xl">Il y a eu un erreur. Réesayez plus tard.</h2>}
        {product && pageInformation}
      </main>
    </div>
  );
};

export default ProductPage;
