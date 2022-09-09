import { FC } from 'react';
import { ComposedFCWithStyles } from '../../../models/Default/ComposedFCWithStyles';

const TextWrapper: FC<ComposedFCWithStyles> = ({children, className}) => {
  return (
    <div className={`bg-white ${className}`}>{children}</div>
  );
};

export default TextWrapper;