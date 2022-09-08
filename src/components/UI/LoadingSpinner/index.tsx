import { loaderOignon } from '../../../assets/spinners';

const LoadingSpinner = () => {
  return (
    <div className='flexCenter w-full h-full'>
      <img 
        src={loaderOignon}
        alt="loader"
        width={200}
      />
    </div>
  );
};

export default LoadingSpinner;