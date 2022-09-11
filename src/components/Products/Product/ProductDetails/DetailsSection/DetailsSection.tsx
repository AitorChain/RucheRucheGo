import { ComposedFCWithStyles } from '../../../../../models/Default/ComposedFCWithStyles';

interface DetailsSectionProps extends ComposedFCWithStyles {
  categorieName: string;
}

const DetailsSection = ({ children, categorieName, className }: DetailsSectionProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-3xl leagueGothic text-center font-normal text-red tracking-wide">{categorieName.toUpperCase()}</h2>
      <div className={`${className} text-black text-justify p-4 bg-[#f3f3f3] rounded-md border`}>{children}</div>
    </div>
  );
};

export default DetailsSection;
