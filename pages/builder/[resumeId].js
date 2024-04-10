import Head from 'next/head';
import React from 'react';
import {
  Builder
} from '@/components';
import ResumeContextProvider from '@/context/ResumeContext';

const ResumeBuilder = () => (
  <>
    <Head>
      <title>Resume Builder | Powered by AI</title>
    </Head>
    <ResumeContextProvider>
      <Builder />
    </ResumeContextProvider>
  </>
);

export default ResumeBuilder;
