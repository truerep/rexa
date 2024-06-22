import React from 'react'
import styled from 'styled-components';

const About = () => {
  const LogoUrl = '/assets/images/company-logo.svg';

  return (
    <Wrapper>
      <HeaderWrapper>
        <img src={LogoUrl} alt="Resume Sync" />
        <h1>About Us</h1>
      </HeaderWrapper>
      <AboutWrapper>
        <AboutText>
          AICVPro is resume parsing tool that helps you to parse resumes and extract information from them. It is a simple and easy to use tool that can help you to save time and effort in the recruitment process.
          <br />
          AICVPRO Chrome Extension is a powerful tool that can help you to parse resumes from different websites. It is a simple and easy to use tool that can help you to save time and effort in the recruitment process.
        </AboutText>
      </AboutWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height: 100vh;
    background-image: linear-gradient(-45deg, rgba(85, 3, 251, 0.1) -9.44%, rgba(254, 168, 2, 0.1) 99.42%);
`;

const HeaderWrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width: 100px;
    }
    h1 {
        color: black;
        font-size: 2rem;
        font-weight: 700;
    }
`;

const AboutWrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const AboutText = styled.div`
    background: linear-gradient(
        90deg
        , rgba(85, 3, 251, 0.1) -9.44%, rgba(254, 168, 2, 0.1) 99.42%
    );
    color: black;
    width: 50%;
    padding: 20px;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
`;

export default About