import { Header } from '@/components/common'
import React from 'react'
import styled from 'styled-components';
import BlogCard from '../BlogCard';

const BlogsListing = ({blogsData}) => {
  return (
    <Wrapper>
        <Header />
        <Container>
            <BlogsWrapper>
              {
                blogsData.length > 0 ? blogsData.map((blogItem) => (
                  <BlogCard blogData={blogItem} />
                )) : null
              }
            </BlogsWrapper>
        </Container>
        <BgImages>
            <BgImageItem className='item-1' src='/assets/icons/gradients/peach.png' alt="bg-1" />
            <BgImageItem className='item-2' src='/assets/icons/gradients/blue.png' alt="bg-2" />
            <BgImageItem className='item-3' src='/assets/icons/gradients/light-blue.png' alt="bg-3" />
            <BgImageItem className='item-4' src='/assets/icons/gradients/green.png' alt="bg-4" />
        </BgImages>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    padding: 110px 20px 0;
    position: relative;
    z-index: 2;

    @media (max-width: 992px) {
        padding: 150px 20px 50px;
    }
`;

const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
`;

const BlogsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding-top: 50px;
`;

const BgImages = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const BgImageItem = styled.img`
  position: absolute;

  &.item-1 {
    top: 0;
    left: -25%;
    width: 50%;
  }

  &.item-2 {
    top: -10%;
    right: -45%;
    width: 100%;
    opacity: 0.8;
  }

  &.item-3 {
    bottom: -30%;
    left: -45%;
    width: 100%;
    opacity: 0.7;
  }

  &.item-4 {
    bottom: -10%;
    right: -20%;
    width: 50%;
    opacity: 0.5;
  }
`;

export default BlogsListing