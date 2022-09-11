import { useState } from 'react';
import productPlaceholder from '../../../../assets/product-placeholder.jpg';
import { ProductImageAndName } from '../../../../models/UI/Products.types';
import OnHoverAnimation from '../../../UI/Animations/OnHoverAnimation';

interface ProductImageAndNameProps extends ProductImageAndName {
  className?: string;
}

const ProductPreview = ({ productImageSrc, productName, className }: ProductImageAndNameProps) => {
  const [isHover, setIsHover] = useState(false);

  const hoverHandler = () => {
    setIsHover((prevState) => !prevState);
  };

  const imgStyles = `object-cover w-full h-64 sm:h-56 rounded-sm rounded-b-none transition duration-100 ease-in-out ${
    isHover && 'brightness-[.35]	'
  }`;

  const textOnHover = (
    <div className="absolute text-center text-white text-xl mb-8 transition ease-in-out duration-500 font-bold georgia">
      Clickez pour me
      <br />
      decouvrir!
    </div>
  );

  return (
    <OnHoverAnimation>
      <div
        className={`flexCenter flex-col w-full h-auto rounded-sm shadow-custom cursor-pointer ${className}`}
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverHandler}
      >
        <img src={productImageSrc || productPlaceholder} alt={productName}
          className={imgStyles} />

        {isHover && textOnHover}

        <div className="px-2 py-2 w-full bg-white flexCenter rounded-b-md ">
          <h3 className="text-red font-semibold text-xl truncate">
            {productName || 'Produit sans nom'}
          </h3>
          <div>
            {}
          </div>
        </div>
      </div>
    </OnHoverAnimation>
  );
};

export default ProductPreview;
