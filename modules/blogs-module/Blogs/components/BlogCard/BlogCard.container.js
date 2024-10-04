import React from 'react'
import BlogCard from './BlogCard'
import { useRouter } from 'next/router'

const BlogCardContainer = ({blogData}) => {
  const router = useRouter();

  return (
    <BlogCard blogData={blogData} router={router} />
  )
}

export default BlogCardContainer