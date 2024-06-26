import React from 'react'
import styled from 'styled-components';

import Link from 'next/link';

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
          <h2>
            About AICVPro
          </h2>
          Welcome to AICVPro! We are dedicated to simplifying and streamlining the recruitment process through our advanced resume parsing technology. Our tool helps you to efficiently parse resumes and extract vital information, saving you significant time and effort in managing candidate information.

          <br />
          <br />
          <h2>
            What We Do
          </h2>
          AICVPro is a cutting-edge resume parsing tool designed to help recruiters and hiring managers by extracting essential details from resumes with ease. Our service is intuitive and user-friendly, making it an indispensable tool in the recruitment industry. Whether you are dealing with a few resumes or managing a large database, AICVPro can help you quickly and accurately retrieve the information you need.

          <br />
          <br />
          <h2>
            AICVPro Chrome Extension
          </h2>
          In addition to our web-based tool, we offer the AICVPro Chrome Extension. This powerful extension enables you to parse resumes directly from various websites, further enhancing your recruitment efficiency. The extension is easy to install and use, providing a seamless experience that integrates with your existing workflow. By leveraging the AICVPro Chrome Extension, you can streamline your hiring process and focus on what truly matters – finding the best talent.

          <br />
          <br />
          <h2>
            Privacy Policy and Disclaimers
          </h2>
          At AICVPro, we are committed to protecting your privacy and ensuring the security of your data. Our privacy policy outlines how we collect, use, and safeguard your personal information. We adhere to industry-standard practices to ensure that your data is handled with the utmost care and confidentiality.

          <br />
          <br />
          <h2>
            Privacy Policy Highlights
          </h2>
          We collect personal information solely for the purpose of providing our resume parsing services.
          We do not share your personal information with third parties without your consent.
          We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure.
          For more details, please read our full <Link href="/privacy-policy">Privacy Policy</Link>.

          <br />
          <br />
          <h2>
            Disclaimers
          </h2>
          AICVPro is designed to assist in the recruitment process and is not a substitute for professional judgment in hiring decisions.

          <br />
          <br />
          We strive for accuracy in our parsing technology but cannot guarantee 100% accuracy in all cases.
          Users are responsible for complying with all applicable laws and regulations when using AICVPro and its extension.
          We hope you find AICVPro to be a valuable tool in your recruitment efforts. If you have any questions or need further assistance, please do not hesitate to contact us.
        </AboutText>
      </AboutWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height: 100%;
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
    text-align: left;
    @media screen and (max-width: 768px) {
      width: 90%;
    }
`;

export default About