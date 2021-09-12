import Header from "@components/Header";
import Leaf from "@components/Leaf";
import TextContainer from "@components/TextContainer";
import { motion } from "framer-motion";
import { bottle, bottleWrapper, leavesContainer } from "variants";

export default function Home() {
  return (
    <div className="h-screen font-serif text-gray-900 bg-gray-100">
      <Header />
      <div className="relative h-[90vh]">
        {/* texts wrapper */}
        <TextContainer />

        {/* juice bottle image */}
        <motion.div
          variants={bottleWrapper}
          initial="initial"
          animate="animate"
          className="absolute top-0 left-0 grid w-full text-center place-items-center "
        >
          <motion.img
            src="/images/juice.png"
            variants={bottle}
            className=" h-[400px] w-[250px] md:h-[550px] md:w-[500px] object-contain "
          />
        </motion.div>

        {/* leaves images */}
        <motion.div variants={leavesContainer} initial="initial" animate="animate">
          <Leaf animationSpeed={1.8} position="top-52 left-[30%]" imageUrl="./images/leaf01.png" />
          <Leaf animationSpeed={1.6} position="top-1/2 right-72" imageUrl="./images/leaf02.png" />
          <Leaf animationSpeed={1.5} position="top-10 right-[40%]" imageUrl="./images/leaf03.png" />
          <Leaf animationSpeed={1.7} position="top-[36%] right-1/3" imageUrl="./images/leaf04.png" />
          <Leaf animationSpeed={1.8} position="top-[75%] left-1/4" imageUrl="./images/leaf05.png" />
        </motion.div>
      </div>
    </div>
  );
}
