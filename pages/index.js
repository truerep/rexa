import React from 'react';
import Head from 'next/head';

import {
  AppDownload,
  ClientsList,
  Features,
  Footer,
  GrowthCards,
  Header,
  HeroBanner
} from '@/components';
import {
  useAos
} from '@/hooks';

const index = () => {
  useAos({
    offset: 200
  });

  return (
    <>
      <Head>
        <title>Resume Builder | Powered By AI</title>
      </Head>
      <Header />
      <HeroBanner />
      <GrowthCards />
      <Features />
      {/* <ClientsList /> */}
      <AppDownload />
      <Footer />
    </>
  );
};

export default index;
