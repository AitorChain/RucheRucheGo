import { motion } from 'framer-motion';

type OnHoverAnimationProps = {
  children: JSX.Element
}

const OnHoverAnimation = ({ children }: OnHoverAnimationProps) => {

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17, delay: 0.15 }}
    >
      {children}
    </motion.div>
  );
};

export default OnHoverAnimation;
