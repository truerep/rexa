import React from 'react';
import Head from 'next/head';

import {
  useAos
} from '@/hooks';
import PrivacyPolicy from '@/components/PrivacyPolicy';

const index = () => {
  useAos({
    offset: 200
  });

  return (
    <>
      <Head>
        <title>
          Privacy Policy | AICVPro - Powered by AI
        </title>
      </Head>
      <PrivacyPolicy />
    </>
  );
};

export default index;
