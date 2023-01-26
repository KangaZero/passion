
import { motion } from "framer-motion";
import Cursor from "../components/cursor";
import Head from "next/head";

const Header = () => (
  // <html lang="en">
    <Head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
// </html>

)

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
      
      <Cursor />
    </motion.div>
  </div>
);

export default Layout;