import { ComposedFCWithStyles } from '../../../models/Default/ComposedFCWithStyles';

const TextWrapper = ({ children, className }: ComposedFCWithStyles) => {
  return <div className={`bg-white ${className}`}>{children}</div>;
};

export default TextWrapper;
