import { FC } from 'react';

interface IDetailsSection {
  children: JSX.Element | JSX.Element[] | string
  categorieName: string
  className?: string
}

const DetailsSection: FC<IDetailsSection> = ({children, categorieName, className}) => {
  return (
    <div className='flex flex-col gap-3'>
      <h2 className='text-3xl georgia text-center font-normal text-red'>{categorieName}</h2>
      <div className={`${className} text-black text-justify`}>{children}</div>
    </div>
  );
};

export default DetailsSection;