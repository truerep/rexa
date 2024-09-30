import { Footer, Header } from '@/components/common';
import { colors } from '@/helpers';
import React from 'react'
import styled from 'styled-components';
import BlogCard from '../BlogCard';

const BlogDetail = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <BlogInfoWrapper>
            <BlogKeys>
                <KeyItem>5 min read</KeyItem>
                <KeyItem>24 Sep</KeyItem>
            </BlogKeys>
            <BlogName>This is the name of the Lastest Blog Published on AiCvPro.com</BlogName>
        </BlogInfoWrapper>
        <BlogThumbnailWrapper>
            <BlogThumbnail src="https://framerusercontent.com/images/RBpHBZtwSkU6uF9GENaXtaZ4ozU.png" alt="" />
        </BlogThumbnailWrapper>
        <BlogBody>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam dolore, impedit voluptatem odio consectetur explicabo, eligendi unde, facere voluptates nam ducimus natus. Porro eaque voluptas numquam repellendus quo esse voluptate, blanditiis praesentium facere officia sunt incidunt tenetur nisi ipsam at libero, ex accusamus fuga suscipit? Fugit doloribus veniam animi amet quod cum expedita, maiores fuga adipisci necessitatibus cupiditate, deserunt illo vel ab? Fugiat labore, fuga dolore molestias aliquid impedit exercitationem vitae quia perferendis sint ut obcaecati laborum? Magnam, molestias. Quos quam labore quas eligendi, quia ipsa, veniam temporibus maiores omnis aut impedit quo repellat facilis minus rem, porro ducimus.</p>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corporis odio laborum maxime aut. Provident, aspernatur! Voluptatum distinctio libero deserunt, natus consequuntur doloribus molestiae magnam.</p>
            <img src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2020/04/25073740/AIimg.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corporis odio laborum maxime aut. Provident, aspernatur! Voluptatum distinctio libero deserunt, natus consequuntur doloribus molestiae magnam.</p>
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, voluptates.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatum dolores veniam, libero velit nostrum ea recusandae eos fugiat rem odit reprehenderit dolorum architecto, facilis voluptatem eveniet consectetur! Laudantium, tempore maiores temporibus at sequi voluptatibus voluptates nostrum. Distinctio, natus porro.</p>
            <p>Voluptatum distinctio libero deserunt, natus consequuntur doloribus molestiae magnam.</p>
        </BlogBody>
      </Container>
    <OtherBlogsWrapper>
        <BlogCard />
        <BlogCard />
        <BlogCard />
    </OtherBlogsWrapper>
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
`;

const BlogBody = styled.div`
  padding: 20px 0;
  background: #fff;

  h1, h2, h3, h4, h5, h6 {
    font-size: 20px;
    font-weight: 500;
    color: ${colors.ErrieBlack};
    padding: 5px 30px;
  }
  
  p {
    font-weight: 500;
    color: ${colors.ErrieBlack};
    text-align: justify;
    padding: 5px 30px;
  }

  img {
    width: 100%;
    margin: 20px 0;
  }
`;

const Container = styled.div`
    max-width: 900px;
    margin: 50px auto 50px;
    border-radius: 8px;
    overflow: hidden;
`;

const BlogThumbnailWrapper = styled.div`
    width: 100%;
    height: 400px;
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