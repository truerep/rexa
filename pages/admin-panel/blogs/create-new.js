import { AdminPanel, CreateBlog } from '@/modules/blogs-module'
import Head from 'next/head'
import React from 'react'

const createNew = () => {
  return (
    <>
      <Head>
        <title>Create Blog | AiCvPro</title>
      </Head>
      <AdminPanel>
        <CreateBlog />
      </AdminPanel>
    </>
  )
}

export default createNew