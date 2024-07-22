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
        }
      ]
    },
    {
      title: 'Product',
      links: [
        {
          title: 'Web app',
          url: '/'
        },
        {
          title: 'Chrome extension',
          url: '/'
        }
      ]
    },
    {
      title: 'Legal',
      links: [
        {
          title: 'Privacy Policy',
          url: '/privacy-policy'
        }
      ]
    }
  ];

  return (
    <Wrapper>
      <Context>
        <TopBox>
          <Tagline>Unleash Your Thoughts</Tagline>
          <InfoLine>
            Capture thoughts effortlessly, organize seamlessly: your resume, your way.
          </InfoLine>
          <GetStartedButton>
            Get Started
          </GetStartedButton>
        </TopBox>
        <BottomBox>
          <LeftBox></LeftBox>
          <RightBox>
            {RightBoxesContent.map((box) => (
              <RightBoxes>
                <BottomRightBoxTitle>
                  {box.title}
                </BottomRightBoxTitle>
                <BottomRightBoxContent>
                  {box.links.map((link) => (
                    <Links>
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
  )
};

const Wrapper = styled.div`
  font-size: 14px;
  color: #fff;
  height: 100vh;
  width: 100vw;
  padding: 10px;
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
`;

const Nav = styled.div`
  display: flex;
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
