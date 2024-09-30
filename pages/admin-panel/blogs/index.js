import { AdminPanel, BlogsList } from '@/components'
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