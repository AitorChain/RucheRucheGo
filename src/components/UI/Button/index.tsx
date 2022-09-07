import { FC, MouseEventHandler } from 'react';

interface IButton {
  buttonText: string,
  clickHandler?: MouseEventHandler<HTMLButtonElement>,
  type?: 'button' | 'submit'
}

const Button: FC<IButton> = ({buttonText, clickHandler, type = 'submit'}) => {
  const buttonStyles = 'bg-red transition ease-in-out outline-none text-white px-4 py-2 rounded-2xl text-lg hover:bg-purple';

  if (clickHandler) {
    return (
      <button 
        className={buttonStyles}
        type={type}
        onClick={clickHandler}
      >
        {buttonText}
      </button>
    );
  }
  
  return (
    <button 
      className={buttonStyles}
      type={type}
    >
      {buttonText}
    </button>
  );

};

export default Button;