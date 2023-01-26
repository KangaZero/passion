'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { navVariants, navItems, slideIn } from '../utils/motion';

// How to import SVG into react apps 
// https://www.freecodecamp.org/news/how-to-import-svgs-in-react-and-vite/#:~:text=Importing%20SVGs%20using%20the%20image,%2Fpath%2Fto%2Fimage.

import menuSVG from '../images/menu.svg';
import headsetSVG from '../images/headset.svg';
import menuFlippedSVG from '../images/menu-flipped.svg';

const Navbar = () => {

return( 
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
    id="nav"
  >
    <div className="absolute w-[100%] inset-0" />
    <div className={`${styles.innerWidth} w-[95%] mx-auto flex justify-between gap-8`}>
     <motion.div
     variants={slideIn('left', 'spring', 0.7, 1.5)}
     >
      <Image
        width={24}
        height={24}
        src={headsetSVG}
        alt="search"
        className="object-contain"
      />
     </motion.div>
      <a
        className="font-extrabold nav-light-text text-[40px] leading-[30px]"
        href="#nav"
      >
        Passion
      </a>
      <motion.button 
      type="button"
      variants={slideIn('right', 'spring', 0.7, 1.5)}
      whileHover={{
        transform: 'scale:(-1,1), translate:(-20,0)'
      }}
      >
        <Image
          width={24}
          height={24}
          src={menuSVG}
          alt="menu"
          className="object-contain"
        />
      </motion.button>
    </div>

  </motion.nav>
)
}


export default Navbar;