import useMobileDetect from '../../hooks/useMobileDetect';

import Logo from '../UI/Logo/Logo';
import SearchBar from '../UI/SearchBar/SearchBar';

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
        className={whiteLogo ? 'w-[40rem]' : 'w-[40rem]'}
      />
    </div>
  ) : (
    <div className="flex">
      <Logo whiteLogo={whiteLogo} className='w-[18rem] mt-2 md:mt-2 lg:mt-0 xl:mt-5 xl:absolute xl:top-0' />
    </div>
  );

  const searchBar = (
    <div className="flexCenter lg:flexStartEnd xl:flexCenter mb-4 mt-6 md:mt-6 xl:my-6">
      <div className="w-[40rem]">
        <SearchBar placeHolder="Qu'est-ce qu'on veut manger aujourd'hui?" />
      </div>
    </div>
  );

  return (
    <div className='lg:flexBetween xl:block'>
      {logo}
      {showSearchBar && searchBar}
    </div>
  );
};

export default Navbar;
