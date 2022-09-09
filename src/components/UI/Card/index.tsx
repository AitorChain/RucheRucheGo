import { ComposedFCWithStyles } from '../../../models/Default/ComposedFCWithStyles';

const Card = ({ children, className }: ComposedFCWithStyles) => {
  return <div className={`rounded-md shadow-custom z-0 ${className}`}>{children}</div>;
};

export default Card;
