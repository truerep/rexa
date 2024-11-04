import React from 'react'

import styled from 'styled-components'
import { BlogCard } from '@/modules/blogs-module/common'


const BlogsList = ({ blogsData }) => {
  return (
    <Wrapper>
      <BlogsWrapper>
        {
          blogsData.length > 0 ? blogsData.map((blogItem) => (
            <BlogCard blogData={blogItem} admin={true} />
          )) : null
        }
      </BlogsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`;

const BlogsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding-top: 50px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
    }
`;

export default BlogsList