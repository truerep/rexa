import Head from 'next/head';
import React from 'react';
import {
  Dashboard
} from '@/components';

const dashboard = () => (
  <>
    <Head>
      <title>
        Dashboard | AiCV
      </title>
    </Head>
    <Dashboard />
  </>
);

export default dashboard;
