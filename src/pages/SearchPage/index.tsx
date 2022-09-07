import React from 'react';
import Navbar from '../../components/Navbar';
import ProductsList from '../../components/Products/ProductsList';

const SearchPage = () => {
  return (
    <>
      <Navbar />
      <main className='flexCenter'>
        <ProductsList />
      </main>
    </>
  );
};

export default SearchPage;