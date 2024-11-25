import { AdminPanel, UsersList } from '@/modules/blogs-module'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <>
      <Head>
        <title>Users | AiCvPro</title>
      </Head>
      <AdminPanel>
        <UsersList />
      </AdminPanel>
    </>
  )
}

export default index