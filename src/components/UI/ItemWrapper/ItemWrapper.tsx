import { ComposedFCWithStyles } from '../../../models/Default/ComposedFCWithStyles';

const ItemWrapper = ({ children, className }: ComposedFCWithStyles) => {
  return <div className={`px-4 py-1 rounded-xl text-lg ${className}`}>{children}</div>;
};

export default ItemWrapper;
