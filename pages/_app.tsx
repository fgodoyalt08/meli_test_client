import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styles from 'styles/base.module.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <div className={styles.base}>
    <Component {...pageProps} />
  </div>;
}

export default MyApp
