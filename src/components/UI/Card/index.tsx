import React, { FC } from 'react';

interface ICard {
  className: string,
  children: JSX.Element[] | JSX.Element
}

const Card: FC<ICard> = ({children, className}) => {
  return (
    <div className={`rounded-md drop-shadow ${className}`}>
      {children}
    </div>
  );
};

export default Card;