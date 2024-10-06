import React from 'react'
import BlogCard from './BlogCard'
import { useRouter } from 'next/router'

const BlogCardContainer = ({ blogData, admin = false }) => {
  const router = useRouter();

  const redirectToBlogDetail = () => {
    if (admin) {
      return router.push(`/admin-panel/blogs/edit/${blogData?.slug}`);
    } else {
      router.push(`/blogs/${blogData?.slug}`);
    }
  }

  return (
    <BlogCard blogData={blogData} redirectToBlogDetail={redirectToBlogDetail} />
  )
}

export default BlogCardContainer