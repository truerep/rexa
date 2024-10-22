import React from 'react'
import BlogsList from './BlogsList'
import { useRouter } from 'next/router'
import { getAllBlogsAdmin } from '@/api';
import toast from 'react-hot-toast';

const BlogsListContainer = () => {
  const router = useRouter();
  const [blogsData, setBlogsData] = React.useState([]);

  React.useEffect(() => {
    getBlogs();
  }, [router])

  const getBlogs = async () => {
    try {
      const res = await getAllBlogsAdmin();
      if (res?.data) {
        setBlogsData(res.data?.blogs);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Something went wrong');
    }
  }

  return (
    <BlogsList router={router} blogsData={blogsData} />
  )
}

export default BlogsListContainer