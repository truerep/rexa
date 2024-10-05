import React from 'react'
import BlogsList from './BlogsList'
import { useRouter } from 'next/router'
import { getAllBlogs } from '@/api';

const BlogsListContainer = () => {
  const router = useRouter();
  const [blogsData, setBlogsData] = React.useState([]);

  React.useEffect(() => {
    getBlogs();
  }, [router])

  const getBlogs = async () => {
    try {
      const res = await getAllBlogs();
      if (res?.data) {
        setBlogsData(res.data?.blogs);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <BlogsList router={router} blogsData={blogsData} />
  )
}

export default BlogsListContainer