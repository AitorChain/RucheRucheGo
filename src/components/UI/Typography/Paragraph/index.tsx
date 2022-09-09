import { FC } from 'react';
import { TypographyComponent } from '../../../../models/Default/Typography';

const Paragraph: FC<TypographyComponent> = ({children, className}) => {
  return (
    <p className={`text-black text-lg text-justify ${className}`}>{children}</p>
  );
};

export default Paragraph;