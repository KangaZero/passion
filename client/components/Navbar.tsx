'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { navVariants } from '../utils/motion';

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
    <div className="absolute w-[100%] inset-0 nav-light-gradient" />
    <div className={`${styles.innerWidth} w-[95%] mx-auto flex justify-between gap-8`}>
      <Image
        width={24}
        height={24}
        src={headsetSVG}
        alt="search"
        className="object-contain"
      />
      <a
        className="font-extrabold garamond text-[36px] leading-[30px] text-black"
        href="#nav"
      >
        Passion
      </a>
      <button type="button">
        {/* can't use react hooks, to render the other menu-flipped.svg onCLick */}
        <Image
          width={24}
          height={24}
          src={menuSVG}
          alt="menu"
          className="object-contain"
        />
      </button>
    </div>

  </motion.nav>
)
}


export default Navbar;