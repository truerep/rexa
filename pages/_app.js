/* eslint-disable react/react-in-jsx-scope */
import '@/styles/globals.css';
import NextTopLoader from 'nextjs-toploader';
import {
  Toaster
} from 'react-hot-toast';

export default function App({Component, pageProps}) {
  return (
    <>
      <NextTopLoader
        height={200}
        color="red"
        shadow="0 0 10px #9F85F7,0 0 5px #9F85F7"
        showSpinner={false}
      />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Component {...pageProps} />
    </>
  );
}
