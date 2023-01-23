import '../styles/reset.css';
import '../styles/light-background.css';
import '../styles/loading.css';
import '../styles/globals.css';
import '../styles/signup.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
