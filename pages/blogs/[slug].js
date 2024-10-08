import React from 'react'

import { useAos } from '@/hooks';
import { BlogDetail } from '@/modules/blogs-module';
import { getParticularBlog } from '@/api';

const BlogPost = ({data}) => {
    useAos({
        offset: 200
      });

  return (
    <>
        <BlogDetail blogData={data} />
    </>
  )
}

export async function getServerSideProps(context) {
  const blogSlug = context.params?.["slug"]
  try {
    const res = await getParticularBlog(blogSlug)
    return { props: { data: res?.data } }
  } catch (err) {
    return { props: { data: null } }
  }
}

export default BlogPost
