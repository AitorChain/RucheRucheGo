import { MouseEvent, useState } from 'react';

import { MdKeyboardArrowUp } from 'react-icons/md';

import productPlaceholder from '../../../../assets/product-placeholder.jpg';
import { AdaptedProductShort } from '../../../../models/UI/Products.types';
import { motion } from 'framer-motion';
import { Button, NutriscoreTag } from '../../../UI';
import { useMobileDetect } from '../../../../hooks';
import { useNavigate } from 'react-router-dom';

interface ProductPreviewProps extends AdaptedProductShort {
  className?: string;
}

const ProductPreview = ({ image, name, nutritionGrade, className, id, ingredients }: ProductPreviewProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const navigate = useNavigate();

  const { isMobile } = useMobileDetect();

  const hoverHandler = () => {
    if (!isMobile) {
      setIsExpanded((prevState) => !prevState);
    }
    return;
  };

  const arrowClickHandler = () => {
    if (isMobile) {
      setIsExpanded((prevState) => !prevState);
    }
    return;
  };

  const buttonClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(`/product/${id}`);
  };

  const imgVariants = {
    open: {
      height: '0rem',
    },
    close: {height: '10rem'}
  };

  const arrowVariants = {
    open: {
      transform: 'rotate(180deg)'
    },
    close: {}
  };



  return (
    <motion.div layout
      whileHover={{ scale: 1.2, zIndex: 40 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17, delay: 0.8 }}
      className={`flex flex-col w-full h-[14rem] overflow-hidden rounded-sm shadow-md cursor-pointer bg-white ${className}`}
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
    >
      <motion.div layout
        initial="close"
        className='w-full z-20'
        transition={{
          duration: 0.4,
          delay: 0.2
        }}
        animate={isExpanded ? 'open' : 'close'}
        variants={imgVariants}>
        <div className='absolute w-24 mt-2 z-20 ml-2'>
          <NutriscoreTag score={nutritionGrade}
            className="w-24 z-20" />
        </div>
        <img
          src={image || productPlaceholder}
          alt={name}
          className='object-cover min-h-[14em] z-20 h-full w-full rounded-sm select-none pointer-events-none rounded-b-none brightness-75' />
      </motion.div>

      <div onClick={arrowClickHandler}
        className='px-3 py-3 w-full z-30 bg-red flex flex-row'>
        <h3 className="text-white leagueGothic text-3xl leading-normal truncate w-full">
          {name?.toUpperCase() || 'Produit sans nom'}
        </h3>
        <motion.div initial={'close'}
          animate={isExpanded ? 'open' : 'close'}
          variants={arrowVariants}
          className='flexCenter'
          transition={{
            duration: 0.4,
            delay: 0.2
          }}>
          <MdKeyboardArrowUp size={45}
            className={'text-center text-white'} />
        </motion.div>
      </div>

      <div className="py-2 px-4 z-20 w-full h-full flex flex-col justify-between bg-white rounded-b-md">
        <div className='flex flex-col gap-2 w-full h-full'>
          <h5 className='text-center text-lg line-clamp-2 font-bold text-red lato'>{name}</h5>
          <p className='truncate text-md lato font-semibold italic text-center text-black'>{ingredients}</p>
        </div>
          
        <div className='flexCenter'>
          <Button clickHandler={buttonClickHandler}
            buttonText='Découvrir'/>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductPreview;
