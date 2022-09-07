import React from 'react';
import useMobileDetect from '../../hooks/useMobileDetect';
import Logo from '../UI/Logo';
import SearchBar from '../UI/SearchBar';

const Navbar = () => {
  const { isMobile } = useMobileDetect();

  const logo =  isMobile ? (
    <div className='flexCenter'>
      <Logo
        showFullLogo
        className='w-[40rem] mt-1'
      />
    </div>
  ) : (
    <div className='absolute top-0'>
      <Logo 
        className='w-[70px]'
      />
    </div>

  );

  return (
    <div>
      {logo}
      <div className='flex flexCenter my-4 md:my-8'>
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