import React, { FC } from 'react';

interface IParagraph {
  children: string
}

const Paragraph: FC<IParagraph> = ({children}) => {
  return (
    <p className='text-black text-justify'>{children}</p>
  );
};

export default Paragraph;