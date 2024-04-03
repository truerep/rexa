/* eslint-disable react/react-in-jsx-scope */
import {
  authorizedRoutes
} from '@/constants';
import '@/styles/globals.css';
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
      <Component {...pageProps} />
    </>
  );
}
