import { skipToken } from '@reduxjs/toolkit/dist/query';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ProductDetails from '../../components/Products/Product/ProductDetails';
import ProductImage from '../../components/Products/Product/ProductImage';
import BackgroundColorEffect from '../../components/UI/BackgroundColorEffect';
import { PageTitle } from '../../components/UI/Typography';
import { useGetProductByIdQuery } from '../../services/OpenFood';

const ProductPage = () => {

  const { id } = useParams();

  const { data, error, isLoading } = useGetProductByIdQuery(id ?? skipToken);

  return (
    <div>
      <BackgroundColorEffect
        color='bg-purple'
        height="h-56"
      />
      <Navbar 
        showSearchBar={false}
        whiteLogo
      />
      <PageTitle className='text-white text-center'>{data?.product['product_name']}</PageTitle>
      <main>
        <div className='flexCenter flex-col lg:flex lg:items-start lg:flexCenterStart lg:flex-row gap-8 lg:gap-28 mb-8 '>
          <ProductImage 
            productImageSrc={data?.product['image_front_url']}
            productName={data?.product['product_name']}
          />
          <ProductDetails 
            product={data?.['product']}           
          />
        </div>
      </main>
    </div>
  );
};

export default ProductPage;