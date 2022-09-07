import React from 'react';
import logo from '../../../../assets/logo';

const FullLogo = () => {
  return (
    <img 
      src={logo.expandedLogo}
      alt='expanded-logo'
      className='px-0 md:w-[725px] lg:w-[825px]'
    />
  );
};

export default FullLogo;