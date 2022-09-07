import React, { FC } from 'react';
import logo from '../../../assets/logo';

interface ILogo {
  showFullLogo?: boolean,
  className: string,
}

const Logo: FC<ILogo> = ({ showFullLogo, className }) => {

  if (showFullLogo) {
    return (
      <img 
        src={logo.expandedLogo}
        alt='expanded-logo'
        className={`px-0 ${className}`}
      />
    );
  }

  return (
    <img 
      src={logo.logo}
      alt='logo'
      className={`py-2 ${className}`}
    />       
  );
};

export default Logo;