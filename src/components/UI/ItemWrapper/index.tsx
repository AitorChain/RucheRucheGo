import { FC } from 'react';

interface ITextWrapper {
  children: JSX.Element | JSX.Element[] | string
  className: string
}

const ItemWrapper: FC<ITextWrapper> = ({children, className}) => {
  return (
    <div className={`px-4 py-1 rounded-xl text-lg ${className}`}>{children}</div>
  );
};

export default ItemWrapper;