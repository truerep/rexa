import Head from 'next/head'
import React from 'react'

import { useAos } from '@/hooks';
import { BlogDetail } from '@/modules/blogs-module';

const BlogPost = () => {
    useAos({
        offset: 200
      });

  return (
    <>
        <Head>
            <title>Blogs | AiCvPro</title>
        </Head>
        <BlogDetail />
    </>
  )
}

export default BlogPost
