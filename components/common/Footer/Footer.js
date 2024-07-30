import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  colors
} from '@/helpers';

const Footer = () => {
  const RightBoxesContent = [
    {
      title: 'Build in public',
      links: [
        {
          title: 'About',
          url: '/about'
        },
        {
          title: 'Blog',
          url: '#footer'
        }
      ]
    },
    {
      title: 'Product',
      links: [
        {
          title: 'Web app',
          url: '/create'
        },
        {
          title: 'Chrome extension',
          url: 'https://chromewebstore.google.com/detail/ai-cv-pro/inkipncofmmbnabhkgoahpagmbakhjcb?authuser=1&hl=en'
        }
      ]
    },
    {
      title: 'Legal',
      links: [
        {
          title: 'Privacy Policy',
          url: '/privacy-policy'
        },
        {
          title: 'Terms of Service',
          url: '#footer'
        }
      ]
    }
  ];

  return (
    <>
      <Nav>
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          About Us
        </Link>
        <Link href="/privacy-policy">
          Privacy Policy
        </Link>
      </Nav>
      <Wrapper>
        <Context>
          <TopBox data-aos="fade-up" data-aos-duration="500">
            <Tagline>Unleash Your Thoughts</Tagline>
            <InfoLine>
              Capture thoughts effortlessly, organize seamlessly: your resume, your way.
            </InfoLine>
            <GetStartedButton>
              <a href="/create">Get Started</a>
            </GetStartedButton>
          </TopBox>
          <BottomBox>
            <LeftBox data-aos="fade-up" data-aos-duration="1000">
              <LeftBoxTitle>
                AI CV Pro
              </LeftBoxTitle>
              <LeftBoxTagline>
                Capture thoughts effortlessly, <br /> organize seamlessly: your resume, your way.
              </LeftBoxTagline>

              <CopyRight>&copy; {new Date().getFullYear()} AI CV Pro</CopyRight>

            </LeftBox>
            <RightBox data-aos="fade-up" data-aos-duration="1000">
              {RightBoxesContent.map((box) => (
                <RightBoxes>
                  <TitleTopRightBox>
                    <BottomRightBoxTitle>
                      {box.title}
                    </BottomRightBoxTitle>
                  </TitleTopRightBox>
                  <BottomRightBoxContent>
                    {box.links.map((link) => (
                      <Links href={link.url}>
                        {link.title}
                      </Links>
                    ))}
                  </BottomRightBoxContent>
                </RightBoxes>
              ))}
            </RightBox>
          </BottomBox>
        </Context>
      </Wrapper>
    </>

  )
};

const Wrapper = styled.div`
  font-size: 14px;
  color: #fff;
  height: 100vh;
  padding: 10px;

  @media (max-width: 576px) {
    display: none;
  }
`;

const Context = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border-radius: 2em;
  height: 100%;
  background-color: ${colors.DarkGunmetal};

  @media (max-width: 576px) {
    flex-direction: column; 
    
    > p {
      order: 1;
      padding: 10px;
      text-align: center;
      width: 100%;
      box-sizing: border-box;
    }
  }
`;

const TopBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Tagline = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const InfoLine = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  padding: 10px;
`;

const GetStartedButton = styled.button`
  background-color: ${colors.DarkGunmetal};
  color: #fff;
  margin-top: 20px;
  border: 1px solid #fff;
  padding: 10px 20px;
  border-radius: 2em;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;

  a{
    color: #fff;
    text-decoration: none;
  
  }
`;

const Nav = styled.div`
  display: none;
  background-color: ${colors.DarkGunmetal};
  padding: 10px;
  align-items: center;
  
  a {
    padding: 0 10px;
    color: #fff;
    transform: unset;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column; 
    padding: 5px 10px;
  }
`;

const BottomBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
  padding: 20px;
`;

const LeftBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  
`;

const LeftBoxTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`;

const LeftBoxTagline = styled.p`
  font-size: 0.7rem;
  font-weight: 400;
`;

const CopyRight = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding: 10px 0;
`;

const RightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const RightBoxes = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  height: 100%;
`;

const TitleTopRightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const BottomRightBoxTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

const BottomRightBoxContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Links = styled.a`
  color: #fff;
  padding: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.8;

  &:hover {
    text-decoration: underline;
    opacity: 1;
  }
`;

export default Footer;
