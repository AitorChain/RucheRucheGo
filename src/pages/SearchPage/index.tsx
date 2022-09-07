import React from 'react';
import Navbar from '../../components/Navbar';
import ProductsList from '../../components/Products/ProductsList';

const SearchPage = () => {
  return (
    <>
      <Navbar />
      <main className='flexCenter mt-16'>
        <ProductsList />
      </main>
    </>
  );
};

export default SearchPage;