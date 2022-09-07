import React from 'react';
import FullLogo from '../../components/UI/FullLogo';
import SearchBar from '../../components/UI/SearchBar';

const Homepage = () => {
  return (
    <div className='flexCenter flex-col gap-2 w-screen md:h-screen md:mt-0 h-full mt-52 '>
      <FullLogo />
      <SearchBar />
    </div>
  );
};

export default Homepage;