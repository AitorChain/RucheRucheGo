import { ComposedFCWithStyles } from '../../../../../models/Default/ComposedFCWithStyles';

interface DetailsSectionProps extends ComposedFCWithStyles {
  categorieName: string;
}

const DetailsSection = ({ children, categorieName, className }: DetailsSectionProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-3xl georgia text-center font-normal text-red">{categorieName}</h2>
      <div className={`${className} text-black text-justify`}>{children}</div>
    </div>
  );
};

export default DetailsSection;
