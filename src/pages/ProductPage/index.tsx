import React from 'react';
import Navbar from '../../components/Navbar';
import BackgroundColorEffect from '../../components/UI/BackgroundColorEffect';

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
        pageTitle="PEPINILLOS FRESCOS"
      />
    </div>
  );
};

export default ProductPage;