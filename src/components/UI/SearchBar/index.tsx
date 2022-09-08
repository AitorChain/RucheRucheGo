import { ChangeEvent, FC, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks/hooks';
import { setSearchQuery } from '../../../features/searchSlice';
import Button from '../Button';

interface ISearchBar {
  showButton?: boolean,
  buttonText?: string,
  placeHolder: string
}

const SearchBar: FC<ISearchBar> = ({showButton, buttonText, placeHolder, }) => {
  const { searchQuery } = useAppSelector(state => state.search);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const submitHandler = (event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate('/search');
    }
  };

  const userKeystrokeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <form 
      className="flexCenter flex-col"
      onSubmit={submitHandler}>
      <label htmlFor="searchInput" />
      <input 
        type="text" 
        id="search"
        value={searchQuery}
        onChange={userKeystrokeHandler}
        name="searchInput"
        placeholder={placeHolder} 
        className='py-4 px-4 w-full placeholder-red placeholder-opacity-50 transition ease-in-out shadow-lg focus:shadow-sm outline-none border-2 border-lightPink text-lg focus:scale-[1.02] rounded-sm'
      />


      {/* ATTENTION - Pour montrer le button il faut passer les props showButton ET buttonText au composant SearchBar */}

      {showButton && buttonText && (
        <div className='mt-8'>
          <Button buttonText={buttonText}  />
        </div>)
      }
      
    </form>
  );
};

export default SearchBar;