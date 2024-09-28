import Head from 'next/head';
import React from 'react';

import Admin from '@/modules/blogs-module/Admin';

const blogs = () => (
    <>
        <Head>
            <title>
                Blog | AICVPro - Powered by AI
            </title>
        </Head>
        <Admin />
    </>
);

export default blogs;
