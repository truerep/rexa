import React from 'react';
import Head from 'next/head';
import {
  LoginForm
} from '@/components/common';

const authenticate = () => (
  <>
    <Head>
      <title>Login or Signup | AiCV</title>
    </Head>
    <LoginForm />
  </>
);

export default authenticate;
