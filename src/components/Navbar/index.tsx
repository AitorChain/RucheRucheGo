import React from 'react';
import useMobileDetect from '../../hooks/useMobileDetect';
import { FullLogo, SmallLogo } from '../UI/Logo/';
import SearchBar from '../UI/SearchBar';

const Navbar = () => {
  const { isMobile } = useMobileDetect();

  const logo =  isMobile ? (
    <div className=''>
      <FullLogo />
    </div>
  ) : (
    <div className='absolute top-0'>
      <SmallLogo />
    </div>

  );

  return (
    <div>
      {logo}
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