import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "variants";

const TextContainer = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="flex flex-col h-full px-2 py-28 md:px-52"
    >
      {/* upper */}
      <div className="flex items-center justify-between text-lg md:text-2xl">
        <motion.span variants={fadeIn()} className="text-green-600 ">
          Find your clean juice
        </motion.span>
        <motion.span variants={fadeIn()} className="first-letter:text-5xl">
          2 /4
        </motion.span>
      </div>
      {/* //text */}
      <div className="grid flex-1 place-items-center">
        <motion.span
          variants={fadeIn()}
          initial="initial"
          animate="animate"
          className="text-5xl font-black tracking-wider md:text-9xl"
        >
          ORANGE
        </motion.span>
      </div>
      {/* lower */}
      <div className="flex items-center justify-between ">
        <motion.button
          variants={fadeIn()}
          className="p-2 text-base tracking-wide text-white lowercase bg-gray-900 rounded-lg md:px-6 md:py-3 md:text-lg "
        >
          show all the juices
        </motion.button>
        <motion.p variants={fadeIn()} className="text-sm font-semibold md:text-2xl">
          Your healthy <span className="text-green-600"> life </span> <br /> starts here with us!
        </motion.p>
      </div>
    </motion.div>
  );
};

export default TextContainer;
