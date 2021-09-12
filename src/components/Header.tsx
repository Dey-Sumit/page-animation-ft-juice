import { motion } from "framer-motion";
import { fadeIn } from "variants";

const Header = () => {
  return (
    <motion.div
      variants={fadeIn("down")}
      initial="initial"
      animate="animate"
      className="h-[10vh] flex items-center px-10 py-4 md:px-20 text-lg justify-between"
    >
      <span className="font-black md:text-2xl">CLEAN JUICE</span>
      <div className="justify-center flex-1 hidden space-x-5 md:flex ">
        <span>SHOP</span>
        <span>STORY</span>
        <span>MENU</span>
        <span>CONTACT</span>
        <span>ALL JUICES</span>
      </div>

      <span className="hidden font-medium md:block">My Account</span>
      <span className="block md:hidden">🤕</span>
    </motion.div>
  );
};

export default Header;
