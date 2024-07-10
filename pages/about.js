import React from 'react';
import Head from 'next/head';

import {
  useAos
} from '@/hooks';
import About from '@/components/About';

const about = () => {
  useAos({
    offset: 200
  });

  return (
    <>
      <Head>
        <title>About | AICVPro - Powered by AI</title>
      </Head>
      <About />
    </>
  );
};

export default about;
