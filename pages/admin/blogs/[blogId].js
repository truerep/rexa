import Head from 'next/head';
import React from 'react';

import Blogs from '@/modules/admin-module/src/Blogs';

const blogs = () => (
  <>
    <Head>
      <title>
        Blog | AICVPro - Powered by AI
      </title>
    </Head>
    <Blogs />
  </>
);

export default blogs;
