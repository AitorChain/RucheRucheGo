import { useState } from 'react';

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import productPlaceholder from '../../../../assets/product-placeholder.jpg';
import { AdaptedProductShort } from '../../../../models/UI/Products.types';
import { motion } from 'framer-motion';
import OnHoverAnimation from '../../../UI/Animations/OnHoverAnimation';
import { NutriscoreTag } from '../../../UI';

interface ProductPreviewProps extends AdaptedProductShort {
  className?: string;
}

const ProductPreview = ({ image, name, nutritionGrade, className }: ProductPreviewProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  console.log(nutritionGrade);

  const hoverHandler = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const imgVariants = {
    open: {
      height: '2rem',
    },
    close: {height: '10rem'}
  };

  const moreInfoVariants = {
    open: {display: 'flex'},
    close: {display: 'flex'},
  };

  const arrowVariants = {
    open: {
      transform: 'rotate(180deg)'
    },
    close: {}
  };



  return (
    <motion.div layout
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17, delay: 0.2 }}
      className={`flex flex-col w-full h-[14rem] overflow-y-hidden rounded-md shadow-custom cursor-pointer bg-white ${className}`}
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
    >
      <motion.div layout
        initial="close"
        className='w-full'
        transition={{
          duration: 0.4,
          delay: 0.6
        }}
        animate={isExpanded ? 'open' : 'close'}
        variants={imgVariants}>
        <div className='absolute w-24 mt-2 ml-2 shadow-lg'>
          <NutriscoreTag score={nutritionGrade} />
        </div>
        <img        
          src={image || productPlaceholder}
          alt={name}
          className='object-cover min-h-[14em] h-full w-full rounded-md rounded-b-none' />
      </motion.div>

      <div className='px-3 py-3 w-full bg-red flex flex-row'>
        <h3 className="text-white leagueGothic text-3xl leading-normal truncate w-full">
          {name?.toUpperCase() || 'Produit sans nom'}
        </h3>
        <motion.div initial={'close'}
          animate={isExpanded ? 'open' : 'close'}
          variants={arrowVariants}
          className='flexCenter'
          transition={{
            duration: 0.2,
            delay: 0.6
          }}>
          <MdKeyboardArrowUp size={45}
            className={'text-center text-white'} />
        </motion.div>

        
      </div>

      <motion.div layout
        variants={moreInfoVariants}
        initial={'close'}
        animate={isExpanded ? 'open' : 'close'}
        className="px-3 py-3 w-full h-full bg-white rounded-b-md"
        transition={{
          duration: 0.4,
          delay: 0.6
        }}>
        <div className='flex flex-col'>
          <p>Hola amigo</p>
          <p>Hola amigo</p>
          <p>Hola amigo</p>
          <p>Hola amigo</p>

        </div>
          
      </motion.div>
    </motion.div>
  );
};

export default ProductPreview;
