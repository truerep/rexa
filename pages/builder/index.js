import Head from 'next/head';
import React, {
  useEffect
} from 'react';
import {
  useRouter
} from 'next/router';
import {
  Builder
} from '@/components';
import ResumeContextProvider from '@/context/ResumeContext';

const ResumeBuilder = () => {
  const router = useRouter();

  useEffect(() => {
    const storedResumeString = typeof window !== 'undefined' && window.sessionStorage.getItem('resumeString');
    // if (!storedResumeString || !router.query.fetchLocalData == '') {
    //   router.push('/create');
    // }
  }, [router]);

  return (
    <>
      <Head>
        <title>Resume Builder | Powered by AI</title>
      </Head>
      <ResumeContextProvider>
        <Builder />
      </ResumeContextProvider>
    </>
  );
};

export default ResumeBuilder;
