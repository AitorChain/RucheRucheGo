import { ComposedFCWithStyles } from '../../../models/Default/ComposedFCWithStyles';

const TextWrapper = ({ children, className }: ComposedFCWithStyles) => {
  return <div className={`bg-white rounded-sm py-4 px-3 lg:px-6 flex flex-col ${className}`}>{children}</div>;
};

export default TextWrapper;
