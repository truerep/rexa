import { AdminPanel, BlogsList } from '@/modules/blogs-module'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <>
      <Head>
        <title>Blogs | AiCvPro</title>
      </Head>
      <AdminPanel>
        <BlogsList />
      </AdminPanel>
    </>
  )
}

export default index