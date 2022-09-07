import React from 'react';
import FullLogo from '../../components/UI/Logo/FullLogo';
import SearchBar from '../../components/UI/SearchBar';

const Homepage = () => {
  return (
    <div className='flexCenter flex-col gap-2 w-full md:h-screen md:mt-0 h-full mt-52 '>
      <div className='flex'>
        <FullLogo />
      </div>
      <div className='lg:w-[40rem] w-full mt-8'>
        <SearchBar 
          showButton
          buttonText='Rechercher'
          placeHolder="Qu'est-ce qu'on veut manger aujourd'hui?"
        />
      </div>
    </div>
  );
};

export default Homepage;