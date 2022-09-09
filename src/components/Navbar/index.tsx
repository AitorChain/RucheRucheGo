import useMobileDetect from '../../hooks/useMobileDetect';

import Logo from '../UI/Logo';
import SearchBar from '../UI/SearchBar';

interface NavbarProps {
  showSearchBar: boolean;
  whiteLogo?: boolean;
}

const Navbar = ({ showSearchBar, whiteLogo }: NavbarProps) => {
  const { isMobile } = useMobileDetect();

  /* 
    On utilise le custom hook UseMobileDetect pour afficher dynamiquement le logo. 
    On utilise aussi la props whiteLogo pour changer le color du logo.
    Note: comme je n'ai reussi a trouver que la version "expanded" de votre logo, je vais l'utiliser dans les deux cas.
  */
  const logo = isMobile ? (
    <div className="flexCenter z-[-1]">
      <Logo
        whiteLogo={whiteLogo}
        showFullLogo
        className={whiteLogo ? 'w-[40rem]' : 'w-[40rem] mt-1'}
      />
    </div>
  ) : (
    <div className="absolute top-0">
      <Logo whiteLogo={whiteLogo} className={whiteLogo ? 'w-[15rem] mt-2' : ' w-[5rem]'} />
    </div>
  );

  const searchBar = (
    <div className="flex flexCenter my-4 md:my-8">
      <div className="w-[40rem]">
        <SearchBar placeHolder="Qu'est-ce qu'on veut manger aujourd'hui?" />
      </div>
    </div>
  );

  return (
    <div>
      {logo}
      {showSearchBar && searchBar}
    </div>
  );
};

export default Navbar;
