import React from 'react';
import SmallLogo from '../UI/Logo/SmallLogo';
import SearchBar from '../UI/SearchBar';

const Navbar = () => {
  return (
    <div>
      <div className='fixed top-0'>
        <SmallLogo />
      </div>
      <div className='flex flexCenter my-8'>
        <div className='w-[40rem]'>
          <SearchBar
            placeHolder="Qu'est-ce qu'on veut manger aujourd'hui?"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;