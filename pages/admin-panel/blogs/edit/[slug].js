import { AdminPanel, CreateBlog } from '@/modules/blogs-module'
import Head from 'next/head'
import React from 'react'

const edit = () => {
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

export default edit