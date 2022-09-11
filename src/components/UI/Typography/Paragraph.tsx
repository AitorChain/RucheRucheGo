import { TypographyComponent } from '../../../models/Default/Typography';

const Paragraph = ({ children, className }: TypographyComponent) => {
  return <p className={`text-black text-lg text-justify ${className}`}>{children}</p>;
};

export default Paragraph;
