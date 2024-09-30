import { AdminPanel } from '@/modules/blogs-module'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <>
        <Head>
            <title>Admin Panel | AiCvPro</title>
        </Head>
        <AdminPanel />
    </>
  )
}

export default index