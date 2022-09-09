import { FC } from 'react';
import { TypographyComponent } from '../../../../models/Default/Typography';

const Title: FC<TypographyComponent> = ({children, className}) => {
  return (
    <div className='flex flexCenter my-8 md:my-16'>
      <h1 className={`z-0 ${className} text-4xl md:text-6xl  leagueGothic`}>{children}</h1>
    </div>
  );
};

export default Title;