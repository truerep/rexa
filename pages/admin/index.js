import Head from 'next/head';
import React from 'react';

import AdminModule from '@/modules/admin-module/src';

const create = () => (
  <>
    <Head>
      <title>
        Admin Module | AICVPro - Powered by AI
      </title>
    </Head>
    <AdminModule />
  </>
);

export default create;
