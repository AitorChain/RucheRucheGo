import { motion } from 'framer-motion';
import type { ComposedFCWithStyles } from '../../../models/Default/ComposedFCWithStyles';

const AnimatedGridItem = ({ children, className }: ComposedFCWithStyles) => {
  const variants = {
    whileInView: {
      opacity: [0, 1],
    },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      variants={variants}
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedGridItem;
