import { motion } from "framer-motion";
import { fadeIn } from "variants";

const Header = () => {
  return (
    <motion.nav variants={fadeIn("down")} initial="initial" animate="animate" className="header">
      <span className="header-logo">CLEAN JUICE</span>
      <ul>
        <li>SHOP</li>
        <li>STORY</li>
        <li>MENU</li>
        <li>CONTACT</li>
        <li>ALL JUICES</li>
      </ul>

      <span className="header-account">My Account</span>
      <span className="header-user">🤕</span>
    </motion.nav>
  );
};

export default Header;
