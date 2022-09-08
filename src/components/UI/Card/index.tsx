import { FC } from 'react';

interface ICard {
  className?: string,
  children: JSX.Element[] | JSX.Element
}

const Card: FC<ICard> = ({children, className}) => {
  return (
    <div className={`rounded-md shadow-custom z-0 ${className}`}>
      {children}
    </div>
  );
};

export default Card;