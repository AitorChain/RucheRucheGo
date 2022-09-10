import { motion } from 'framer-motion';

type OnHoverAnimationProps = {
  children: JSX.Element
}

const OnHoverAnimation = ({ children }: OnHoverAnimationProps) => {

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.div>
  );
};

export default OnHoverAnimation;
