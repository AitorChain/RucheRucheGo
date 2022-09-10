import {
  loaderJus,
  loaderNoix,
  loaderOignon,
  loaderPain,
  loaderWhite
} from '../../../assets/loaders';
import pickRandomFromArray from '../../../utilities/arrays/pickRandomFromArray';

type LoadingSpinnerProps = {
  randomLoader?: boolean;
  width?: number;
};

const LoadingSpinner = ({ randomLoader = false, width = 75 }: LoadingSpinnerProps) => {
  let loader = loaderWhite;

  if (randomLoader) {
    const loaders = [loaderOignon, loaderJus, loaderNoix, loaderPain];

    loader = pickRandomFromArray(loaders);
    width = 200;
  }

  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] lg:translate-y-[-50%] translate-y-[-50%] md:translate-y-[-30%] z-0">
      <img src={loader} alt="loader" width={width} />
    </div>
  );
};

export default LoadingSpinner;
