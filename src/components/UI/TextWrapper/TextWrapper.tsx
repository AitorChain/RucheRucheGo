import { ComposedFCWithStyles } from '../../../models/Default/ComposedFCWithStyles';

const TextWrapper = ({ children, className }: ComposedFCWithStyles) => {
  return <div className={`bg-white rounded-md py-4 px-4 lg:pt-5 lg:pb-7 lg:px-6 flex flex-col gap-4 ${className}`}>{children}</div>;
};

export default TextWrapper;
