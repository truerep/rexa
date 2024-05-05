import Head from 'next/head';
import React from 'react';
import {
  Dashboard
} from '@/components';

const dashboard = () => (
  <>
    <Head>
      <title>
        Dashboard | AICVPro
      </title>
    </Head>
    <Dashboard />
  </>
);

export default dashboard;
