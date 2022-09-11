import { FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import Logo from '../../components/UI/Logo/Logo';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import { setSearchQuery } from '../../features/searchSlice';
import useTyped from '../../hooks/useTyped';

const Homepage = () => {
  const { searchQuery } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  /* Avec cet useEffect on reinitialise la valeur de searchQuery chaque fois que l'utilisateur se rend sur Homepage */
  useEffect(() => {
    dispatch(setSearchQuery(''));
  }, []);

  const searchSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate('/search');
    }
  };

  const placeholder = ['Haricots', 'Tomates', 'Pamplemousses', 'Recherche tes aliments preferés'];

  const [typedPlaceholder, focusInputHandler] = useTyped(placeholder);

  return (
    <div className='pageMargins'>
      <div className="flexCenter flex-col gap-2 w-full md:h-screen md:mt-0 h-full mt-52">
        <div className="flex">
          <Logo className="md:w-[725px] lg:w-[825px]" />
        </div>
        <div className="lg:w-[40rem] w-full mt-8">
          <SearchBar
            showButton
            buttonText="Rechercher"
            placeHolder={typedPlaceholder}
            submitHandler={searchSubmitHandler}
            focusHandler={focusInputHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;