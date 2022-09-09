import { FC } from 'react';
import { ComposedFCWithStyles } from '../../../models/Default/ComposedFCWithStyles';

const Card: FC<ComposedFCWithStyles> = ({children, className}) => {
  return (
    <div className={`rounded-md shadow-custom z-0 ${className}`}>
      {children}
    </div>
  );
};

export default Card;