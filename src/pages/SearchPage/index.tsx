import React from 'react';
import Navbar from '../../components/Navbar';
import ProductsList from '../../components/Products/ProductsList';

const SearchPage = () => {
  return (
    <>
      <Navbar 
        showSearchBar
      />
      <main className='flexCenter my-8 md:my-16'>
        <ProductsList />
      </main>
    </>
  );
};

export default SearchPage;