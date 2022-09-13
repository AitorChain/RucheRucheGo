import { loaderOignon } from '../../../assets/spinners';

const LoadingSpinner = () => {
  return (
    <div className="flexCenter w-full h-full z-0">
      <img src={loaderOignon} alt="loader"
        width={200} />
    </div>
  );
};

export default LoadingSpinner;
