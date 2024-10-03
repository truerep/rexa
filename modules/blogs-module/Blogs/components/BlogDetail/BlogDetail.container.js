import React, { useEffect, useState } from 'react'
import BlogDetail from './BlogDetail'
import { getAllBlogs } from '@/api';

const BlogDetailContainer = ({blogData}) => {
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const getRelatedBlogs = async () => {
    try {
      const res = await getAllBlogs();
      if (res?.data) {
        const OtherBlogs = res.data?.blogs.slice(1, 4);
        setRelatedBlogs(OtherBlogs);
      }
    } catch (err) {}
  }

  useEffect(() => {
    getRelatedBlogs();
  }, [])
  
  return (
    <BlogDetail blogData={blogData} relatedBlogs={relatedBlogs} />
  )
}

export default BlogDetailContainer