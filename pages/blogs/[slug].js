import Head from 'next/head'
import React from 'react'

import { BlogDetail } from '@/components'
import { useAos } from '@/hooks';

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
