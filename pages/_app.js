/* eslint-disable react/no-danger */
/* eslint-disable react/react-in-jsx-scope */
import '@/styles/globals.css';
import Head from 'next/head';
import {
  useRouter
} from 'next/router';
import NextTopLoader from 'nextjs-toploader';
import {
  useEffect
} from 'react';
import {
  Toaster
} from 'react-hot-toast';
import 'react-tippy/dist/tippy.css';

import {
  authorizedRoutes
} from '@/constants';

export default function App({Component, pageProps}) {
  const router = useRouter();

  useEffect(() => {
    if (authorizedRoutes.includes(router.pathname)) {
      console.log('check authorization');
      const userAuthorized = true;
      if (userAuthorized) {
        console.log('access granted');
      } else {
        console.log('access denied');
      }
    }
  }, [router]);

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
