import { BlogsListing } from '@/modules/blogs-module'
import Head from 'next/head'
import React from 'react'

const blogs = () => {
  return (
    <>
      <Head>
        <title>Blogs | AiCvPro</title>
      </Head>
      <BlogsListing />
    </>
  )
}

export default blogs
