import React from 'react'
import BlogsList from './BlogsList'
import { useRouter } from 'next/router'

const BlogsListContainer = () => {
  const router = useRouter();

  return (
    <BlogsList router={router} />
  )
}

export default BlogsListContainer