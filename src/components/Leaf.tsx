import { motion } from "framer-motion";
import { leaf, leafWrapper } from "variants";

const Leaf = ({ position, imageUrl, animationSpeed }) => {
  return (
    <motion.div variants={leafWrapper} className={`absolute ${position}`}>
      <motion.img custom={animationSpeed} variants={leaf} className="object-contain w-20 h-28" src={imageUrl} />
    </motion.div>
  );
};

export default Leaf;
