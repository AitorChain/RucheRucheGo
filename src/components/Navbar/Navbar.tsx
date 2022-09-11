import useMobileDetect from '../../hooks/useMobileDetect';

import Logo from '../UI/Logo/Logo';
import SearchBar from '../UI/SearchBar/SearchBar';

interface NavbarProps {
  showSearchBar: boolean;
  whiteLogo?: boolean;
  backgroundColor?: string;
}

const Navbar = ({ showSearchBar, whiteLogo, backgroundColor = 'bg-red' }: NavbarProps) => {
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
    <div className="flexCenter lg:flexStartEnd xl:flexCenter">
      <div className="w-[40rem] mt-5 lg:mt-0">
        <SearchBar placeHolder="Qu'est-ce qu'on veut manger aujourd'hui?" />
      </div>
    </div>
  );

  return (
    <div className={backgroundColor}>
      <div className='pageMargins lg:flexBetween xl:block pb-6 py-3 lg:py-6'>
        {logo}
        {showSearchBar && searchBar}
      </div>
    </div>
  );
};

export default Navbar;
