import nutriscore from '../../../assets/nutriscore';

type NutriscoreTagProps = {
  score: string | undefined,
  className?: string
}

const NutriscoreTag = ({score, className}: NutriscoreTagProps) => {

  let nutriscoreImage = '';
  

  switch (score?.toLowerCase()) {
  case 'a':
    nutriscoreImage = nutriscore.scoreA;
    break;
  case 'b':
    nutriscoreImage = nutriscore.scoreB;
    break;
  case 'c':
    nutriscoreImage = nutriscore.scoreC;
    break;
  case 'd':
    nutriscoreImage = nutriscore.scoreD;
    break;
  case 'e':
    nutriscoreImage = nutriscore.scoreE;
    break;
  default:
    nutriscoreImage = nutriscore.scoreC;
  }

  return (
    <img
      src={nutriscoreImage}
      alt="nutriscore"
      className={`z-0 px-0 ${className}`}
    />
  );
};

export default NutriscoreTag;