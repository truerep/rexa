import React from 'react'
import { HamBurger, PageHeader } from '../common/UiElements'
import styled from 'styled-components'
import { BlogCard } from '@/modules/blogs-module/common'

const hamburgerIcon = 'https://ik.imagekit.io/sahildhingra/hamburger-dark.png';

const BlogsList = ({ router, blogsData, handleHideSidebar }) => {
  return (
    <Wrapper>
      <PageHeader>
        <HamBurger onClick={handleHideSidebar}>
          <img src={hamburgerIcon} alt='hamburger-icon' />
        </HamBurger>
        <h1>Blogs</h1>
        <button
          onClick={() => router.push('/admin-panel/blogs/create-new')}
          className='btn-primary btn-outlined'
        >Create New</button>
      </PageHeader>

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