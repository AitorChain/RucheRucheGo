import React, { FormEvent } from 'react';
import Button from '../Button';

const SearchBar = () => {

  const submitHandler = (event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    console.log('Hello from the submit handler');
  };

  return (
    <form onSubmit={submitHandler}
      className='flexCenter flex-col gap-8 lg:w-[40rem] md:px-8 w-full px-4'>
      <label htmlFor="searchh" />
      <input 
        type="text" 
        id="search"
        name="searchh"
        placeholder="Qu'est-ce qu'on veut manger aujourd'hui?" 
        className='py-4 px-4 w-full placeholder-red placeholder-opacity-50 transition ease-in-out shadow-lg focus:shadow-sm outline-none border-2 border-lightPink text-lg focus:scale-[1.02] rounded-sm'
      />

      <Button />
      
    </form>
  );
};

export default SearchBar;