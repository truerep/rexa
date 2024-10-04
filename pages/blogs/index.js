import { getAllBlogs } from '@/api'
import { BlogsListing } from '@/modules/blogs-module'
import Head from 'next/head'
import React from 'react'

const blogs = ({data}) => {
  return (
    <>
      <Head>
        <title>Blogs | AiCvPro</title>
      </Head>
      <BlogsListing blogsData={data} />
    </>
  )
}

export async function getServerSideProps() {
	try {
		const res = await getAllBlogs();
		return { props: { data: res?.data } }
	} catch (err) {
		return { props: { data: null } }
	}
}

export default blogs
