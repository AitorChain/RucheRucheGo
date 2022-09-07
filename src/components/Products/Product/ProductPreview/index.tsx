import { FC } from 'react';

interface IProductPreview {
  productImageSrc: string,
  productName: string,
}
 
const ProductPreview: FC<IProductPreview> = ({productImageSrc, productName}) => {
  return (
    <div className='flexCenter flex-col rounded-md shadow-custom'>
      <img 
        src={productImageSrc}
        alt={productName}
        className='object-cover sm:w-52 sm:h-64 rounded-md rounded-b-none' />
      <div className='px-2 py-2 w-full bg-red flexCenter rounded-b-md'>
        <h3 className='leagueGothic text-white text-2xl'>{productName}</h3>
      </div>
    </div>
  );
};

export default ProductPreview;