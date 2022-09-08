import { FC } from 'react';

interface ITextWrapper {
  children: JSX.Element | JSX.Element[] | string
  className: string
}

const TextWrapper: FC<ITextWrapper> = ({children, className}) => {
  return (
    <div className={`bg-white ${className}`}>{children}</div>
  );
};

export default TextWrapper;