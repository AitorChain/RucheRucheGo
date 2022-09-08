import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo';

interface ILogo {
  showFullLogo?: boolean,
  className: string,
  whiteLogo?: boolean,
}

const Logo: FC<ILogo> = ({ showFullLogo, className, whiteLogo }) => {

  if (showFullLogo || whiteLogo) {
    return (
      <Link to="/">
        <img 
          src={whiteLogo ? logo.whiteLogoExpanded : logo.expandedLogo}
          alt='expanded-logo'
          className={`z-0 px-0 ${className}`}
        />
      </Link>
    );
  }

  return (
    <Link to="/">
      <img 
        src={logo.logo}
        alt='logo'
        className={`z-0 py-2 ${className}`}
      />       
    </Link>
  );
};

export default Logo;