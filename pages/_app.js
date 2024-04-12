/* eslint-disable react/no-danger */
/* eslint-disable react/react-in-jsx-scope */
import '@/styles/globals.css';
import Head from 'next/head';
import NextTopLoader from 'nextjs-toploader';
import {
  Toaster
} from 'react-hot-toast';
import 'react-tippy/dist/tippy.css';

export default function App({Component, pageProps}) {
  return (
    <>
      <NextTopLoader
        height={2}
        color="#6725f4"
        shadow="0 0 10px #9F85F7,0 0 5px #9F85F7"
        showSpinner={false}
      />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N275J762K6"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N275J762K6');
            `
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
