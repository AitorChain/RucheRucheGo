import React from 'react';
import Navbar from '../../components/Navbar';
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
        
      </main>
    </div>
  );
};

export default ProductPage;