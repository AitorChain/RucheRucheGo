import React from 'react';
import logo from '../../../assets/logo';

const FullLogo = () => {
  return (
    <div className='flex'>
      <img 
        src={logo.expandedLogo}
        alt='expanded-logo'
        className='px-4 md:w-[725px] lg:w-[825px]'
      />
        
    </div>
  );
};

export default FullLogo;