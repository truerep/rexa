import React from 'react';
import Head from 'next/head';
import {
  Authenticate
} from '@/components';

const authenticate = () => (
  <>
    <Head>
      <title>Login or Signup | AiCV</title>
    </Head>
    <Authenticate />
  </>
);

export default authenticate;
