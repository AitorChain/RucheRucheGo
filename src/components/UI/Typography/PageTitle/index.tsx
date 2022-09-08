import React, { FC } from 'react';

interface IPageTitle {
  children: string
  className: string,
}

const Title: FC<IPageTitle> = ({children, className}) => {
  return (
    <div className='flex flexCenter my-8 md:my-16'>
      <h1 className={`z-0 ${className} text-4xl md:text-6xl  leagueGothic`}>{children}</h1>
    </div>
  );
};

export default Title;