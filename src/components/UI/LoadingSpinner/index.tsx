import { loaderOignon } from '../../../assets/spinners';

const LoadingSpinner = () => {
  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] lg:translate-y-[-50%] translate-y-[-50%] md:translate-y-[-30%] z-0">
      <img src={loaderOignon} alt="loader" width={250} />
    </div>
  );
};

export default LoadingSpinner;
