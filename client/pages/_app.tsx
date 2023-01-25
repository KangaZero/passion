import '../styles/reset.css';
import '../styles/light-background.css';
import '../styles/loading.css';
import '../styles/globals.css';
import '../styles/signup.css';

import type { AppProps } from 'next/app'
// import { AnimatePresence } from 'framer-motion'

import Layout from './Layout';
import Navbar from '../components/Navbar';

// mode="wait": This just tells Framer Motion to complete any exit animations (exiting page) before starting a new animation (new page) on the new component.
// initial: Setting this to false means it’s not going to play the animation on the first page load, which just feels better.

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    // <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <Layout>
        <Navbar />
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    // </AnimatePresence>
  );
}

export default MyApp
