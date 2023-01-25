
import { motion } from "framer-motion";

const Layout = ({ children }) => (
  // Create if theme == light ? light-bg : dark-bg 
  <div className="light-bg">
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      
      {children}
      
    </motion.div>
  </div>
);

export default Layout;