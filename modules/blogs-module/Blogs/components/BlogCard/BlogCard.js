import { colors } from '@/helpers';
import React from 'react'
import styled from 'styled-components'

const BlogCard = () => {
  return (
    <Wrapper>
        <BlogImgWrapper>
            <BlogImg src="https://framerusercontent.com/images/RBpHBZtwSkU6uF9GENaXtaZ4ozU.png" alt="" />
        </BlogImgWrapper>
        <BlogInfoWrapper>
            <BlogName>This is the name of the Lastest Blog Published on AiCvPro.com</BlogName>
            <BlogKeys>
                <KeyItem>5 min read</KeyItem>
                <KeyItem>24 Sep</KeyItem>
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