import React from 'react';
import Navbar from '../../components/Navbar';
import ProductsList from '../../components/Products/ProductsList';
import { useGetProductsQuery } from '../../services/OpenFood';

const SearchPage = () => {

  const { data, error, isLoading } = useGetProductsQuery('danone');

  console.log(data);


  return (
    <>
      <Navbar 
        showSearchBar
      />
      <main className='flexCenter my-8 md:my-16'>
        <ProductsList products={data?.products}/>
      </main>
    </>
  );
};

export default SearchPage;