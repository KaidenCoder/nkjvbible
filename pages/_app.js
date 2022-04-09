import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from '../context';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bible</title>
      </Head>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  );
}

export default MyApp;
