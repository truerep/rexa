import Head from 'next/head';
import React from 'react';
import {
  ShowResume
} from '@/components';
import ResumeContextProvider from '@/context/ResumeContext';

const ResumeBuilder = () => (
  <>
    <Head>
      <title>Resume Builder | Powered by AI</title>
    </Head>
    <ResumeContextProvider>
      <ShowResume />
    </ResumeContextProvider>
  </>
);

export default ResumeBuilder;
