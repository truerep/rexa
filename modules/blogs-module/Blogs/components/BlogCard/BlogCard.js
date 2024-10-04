import { colors } from '@/helpers';
import { calculateReadTime, getDayMonth } from '@/utils';
import React from 'react'
import styled from 'styled-components'

const BlogCard = ({blogData, router}) => {
  return (
    <Wrapper onClick={() => router.push(`/blogs/${blogData?.slug}`)}>
        <BlogImgWrapper>
            <BlogImg src={blogData?.image} alt="thumbnail" />
        </BlogImgWrapper>
        <BlogInfoWrapper>
            <BlogName>{blogData?.title}</BlogName>
            <BlogKeys>
                <KeyItem>{calculateReadTime(blogData?.content ?? "")} min read</KeyItem>
                <KeyItem>{getDayMonth(blogData?.createdAt ?? "")}</KeyItem>
            </BlogKeys>
        </BlogInfoWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    background: #fff;
`;

const BlogImgWrapper = styled.div`
    width: 100%;
    height: 250px;

    @media (max-width: 576px) {
        height: 220px;
    }
`;

const BlogImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const BlogInfoWrapper = styled.div`
    padding: 16px;
`;

const BlogKeys = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
`;

const KeyItem = styled.div`
    font-size: 14px;
    color: ${colors.Gray};
`;

const BlogName = styled.h2`
    font-size: 18px;
    color: ${colors.ErrieBlack};
    font-weight: 500;
`;

export default BlogCard