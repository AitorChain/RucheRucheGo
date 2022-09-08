import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../services/OpenFood';

import Navbar from '../../components/Navbar';
import { LoadingSpinner, BackgroundColorEffect } from '../../components/UI';
import { PageTitle } from '../../components/UI/Typography';
import { ProductDetails, ProductImage } from '../../components/Products/Product';
import productPlaceholder from '../../assets/product-placeholder.jpg';


const ProductPage = () => {

  const { id } = useParams();

  const { data, error, isLoading } = useGetProductByIdQuery(id ?? skipToken);

  console.log(data);
  
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
        {isLoading && <LoadingSpinner />}
        {error && <h2 className='text-2xl'>Il y a eu un erreur. Réesayez plus tard.</h2>}
        {data && (
          <div className='flexCenter flex-col lg:flex lg:items-start lg:flexCenterStart lg:flex-row gap-8 lg:gap-28 mb-8 '>
            <ProductImage 
              productImageSrc={data?.product['image_front_url'] || productPlaceholder}
              productName={data?.product['product_name']}
            />
            <ProductDetails 
              product={data?.['product']}           
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductPage;