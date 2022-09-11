import {
  ChangeEvent, FocusEvent, FocusEventHandler, FormEvent, FormEventHandler,
} from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../../app/hooks/hooks';
import { setSearchQuery } from '../../../features/searchSlice';
import OnHoverAnimation from '../Animations/OnHoverAnimation';
import Button from '../Button/Button';

interface SearchBarProps {
  showButton?: boolean;
  buttonText?: string;
  placeHolder: string;
  submitHandler?: FormEventHandler<HTMLFormElement>;
  focusHandler?: FocusEventHandler<HTMLInputElement>;
}

const defaultHandler = (event: FormEvent<HTMLFormElement> | FocusEvent<HTMLInputElement>) => {
  event.preventDefault();
};

const SearchBar = ({
  showButton,
  buttonText,
  placeHolder,
  submitHandler = defaultHandler,
  focusHandler = defaultHandler,
}: SearchBarProps) => {
  const { searchQuery } = useAppSelector((state) => state.search);

  const dispatch = useAppDispatch();

  const userKeystrokeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <form className="flexCenter flex-col" onSubmit={submitHandler}>
      <label htmlFor="searchInput" />
      <motion.input
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        type="text"
        id="search"
        value={searchQuery}
        onFocus={focusHandler}
        onChange={userKeystrokeHandler}
        name="searchInput"
        placeholder={placeHolder}
        className="py-4 px-4 w-full placeholder-red placeholder-opacity-50 shadow-lg outline-none border-2 border-lightPink text-lg rounded-sm"
      />

      {/* ATTENTION - Pour montrer le button il faut passer les props showButton ET buttonText au composant SearchBar */}

      {showButton && buttonText && (
        <OnHoverAnimation>
          <div className="mt-8">
            <Button buttonText={buttonText} />
          </div>
        </OnHoverAnimation>
      )}
    </form>
  );
};

export default SearchBar;
