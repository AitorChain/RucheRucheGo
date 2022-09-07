import logo from '../../../../assets/logo';

const SmallLogo = () => {
  return (
    <img 
      src={logo.logo}
      alt='logo'
      width={70}
      className='py-2'
    />       
  );
};

export default SmallLogo;