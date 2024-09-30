import React from 'react'
import { PageHeader } from '../common/UiElements'
import styled from 'styled-components'

const BlogsList = ({router}) => {
  return (
    <Wrapper>
      <PageHeader>
        <h1>Blogs</h1>
        <button 
          onClick={() => router.push('/admin-panel/blogs/create-new')}
          className='btn-primary btn-outlined'
        >Create New</button>
      </PageHeader>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`;

export default BlogsList