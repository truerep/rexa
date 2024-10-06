import React from 'react'
import BlogsListing from './BlogsListing'

const BlogsListingContainer = ({blogsData}) => {
  return (
    <BlogsListing blogsData={blogsData?.blogs} />
  )
}

export default BlogsListingContainer