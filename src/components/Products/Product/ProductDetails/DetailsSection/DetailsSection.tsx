import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { ComposedFCWithStyles } from '../../../../../models/Default/ComposedFCWithStyles';

interface DetailsSectionProps extends ComposedFCWithStyles {
  categorieName: string;
  expanded?: boolean;
}

const DetailsSection = ({ children, categorieName, className, expanded=false }: DetailsSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(expanded);


  const arrowClickHandler = () => {
    setIsExpanded((prevState) => !prevState);

  };

  const arrowVariants = {
    open: {
      transform: 'rotate(180deg)'
    },
    close: {}
  };

  const childrenVariants = {
    open: { height: 'auto' },
    close: { height: 0 }
  };

  return (
    <div className="flex flex-col">
      <div className='flexBetween cursor-pointer'
        onClick={arrowClickHandler}>
        <h2 className="text-3xl leagueGothic ml-5 font-normal text-red tracking-wide">{categorieName.toUpperCase()}</h2>
        <motion.div initial='close'
          animate={isExpanded ? 'open' : 'close'}
          variants={arrowVariants}
          className='flexCenter'
          transition={{
            duration: 0.4,
          }}>
          <MdKeyboardArrowUp size={45}
            className={'text-center text-red'} />
        </motion.div>
      </div>
      <motion.div 
        initial="close"
        exit="close"
        variants={childrenVariants}
        transition={{ duration: 0.4 }}
        animate={isExpanded ? 'open' : 'close'}>


        <AnimatePresence>
          {isExpanded && (
            <motion.div
              key="content"
              initial="close"
              variants={{open: {opacity: 1}, close: {opacity: 0, transition: {
                duration: 0, delay: 0
              }}}}
              exit="close"
              transition={{ duration: 0.4, delay: 0.2 }}
              animate={isExpanded ? 'open' : 'close'}
              className={`${className} text-black mt-2 h-full text-justify p-4 bg-[#f3f3f3] rounded-sm border`}>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DetailsSection;
