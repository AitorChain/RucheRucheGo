import React from 'react';
import Navbar from '../../components/Navbar';
import ProductDetails from '../../components/Products/Product/ProductDetails';
import ProductImage from '../../components/Products/Product/ProductImage';
import BackgroundColorEffect from '../../components/UI/BackgroundColorEffect';
import { PageTitle } from '../../components/UI/Typography';

const ProductPage = () => {
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
      <PageTitle className='text-white'>PEPINILLOS FRESCOS</PageTitle>
      <main>
        <div className='flexCenterStart flex-row gap-28'>
          <ProductImage 
            productImageSrc='https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-06/Type%20of%20cucumber.jpg?itok=WEuXomjV'
            productName='Pepinillos Frescos'
          />
          <ProductDetails />
        </div>
      </main>
    </div>
  );
};

export default ProductPage;