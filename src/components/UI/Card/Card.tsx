import { ComposedFCWithStyles } from '../../../models/Default/ComposedFCWithStyles';

const Card = ({ children, className }: ComposedFCWithStyles) => {
  return <div className={`shadow-lg z-0 ${className}`}>{children}</div>;
};

export default Card;
