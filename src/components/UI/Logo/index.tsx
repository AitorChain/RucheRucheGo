import { Link } from 'react-router-dom';
import logo from '../../../assets/logo';

interface LogoProps {
  className: string;
  whiteLogo?: boolean;
}

const Logo = ({ className, whiteLogo }: LogoProps) => {

  return (
    <Link to="/">
      <img
        src={whiteLogo ? logo.whiteLogoExpanded : logo.expandedLogo}
        alt="expanded-logo"
        className={`z-0 px-0 ${className}`}
      />
    </Link>
  );
};

export default Logo;
