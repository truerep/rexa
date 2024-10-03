import React from 'react'
import styled from 'styled-components';
import parse from 'html-react-parser';

import BlogCard from '../BlogCard';
import { Footer, Header } from '@/components/common';
import { colors } from '@/helpers';
import { calculateReadTime, getDayMonth } from '@/utils';

const BlogDetail = ({blogData, relatedBlogs}) => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <BlogInfoWrapper>
            <BlogKeys>
                <KeyItem>{calculateReadTime(blogData?.content)} min read</KeyItem>
                <KeyItem>{getDayMonth(blogData?.createdAt)}</KeyItem>
            </BlogKeys>
            <BlogName>{blogData?.title}</BlogName>
        </BlogInfoWrapper>
        <BlogThumbnailWrapper>
            <BlogThumbnail src={blogData?.image} alt="thumbnail" />
        </BlogThumbnailWrapper>
        <BlogBody>
          {parse(blogData?.content ?? "")}
        </BlogBody>
      </Container>
      {
        relatedBlogs.length > 0 ? (
          <OtherBlogsWrapper>
            {relatedBlogs.map((blogItem, index) => (
              <BlogCard key={index} blogData={blogItem} />
            ))}
          </OtherBlogsWrapper>
        ) : null
      }
      <Footer />
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
  height: 100%;
  position: relative;
  z-index: 2;

  @media (max-width: 992px) {
    padding: 150px 20px 50px;
  }

  @media (max-width: 768px) {
    padding: 90px 0 50px;
  }
`;

const BlogBody = styled.div`
  padding: 20px 0;
  background: #fff;

  h1, h2, h3, h4, h5, h6 {
    font-size: 20px;
    font-weight: 500;
    color: ${colors.ErrieBlack};
    padding: 5px 30px;
    line-height: 1.6;
  }
  
  p {
    font-weight: 500;
    color: ${colors.ErrieBlack};
    text-align: justify;
    padding: 5px 30px;
    line-height: 1.6;
  }

  img {
    width: 100%;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    padding: 10px 0 20px;

    h1, h2, h3, h4, h5, h6, p {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;

const Container = styled.div`
    max-width: 900px;
    margin: 50px auto 50px;
    border-radius: 8px;
    overflow: hidden;

    @media (max-width: 768px) {
      border-radius: 0;
    }
`;

const BlogThumbnailWrapper = styled.div`
    width: 100%;
    height: 400px;

    @media (max-width: 768px) {
      height: unset;
    }
`;

const BlogThumbnail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const BlogInfoWrapper = styled.div`
    padding: 20px;
    background: #fff;
`;

const BlogName = styled.h2`
    font-size: 30px;
    color: ${colors.ErrieBlack};
    font-weight: 600;
    text-align: center;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 24px;
    }
`;

const BlogKeys = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    gap: 50px;
`;

const KeyItem = styled.div`
    font-size: 16px;
    color: ${colors.Gray};
    position: relative;

    &:not(:first-child) {
        &::before {
            content: "";
            position: absolute;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #f0c24d;
            left: -30px;
            top: 0;
            bottom: 0;
            margin: auto;
        }
    }
`;

const OtherBlogsWrapper = styled.div`
    max-width: 900px;
    margin: 50px auto 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
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

export default BlogDetail