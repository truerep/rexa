import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';

const PrivacyPolicy = () => {
  const LogoUrl = '/assets/images/company-logo.svg';

  return (
    <Wrapper>
      <HeaderWrapper>
        <Link href="/">
          <img src={LogoUrl} alt="AICVPro" />
        </Link>
        <h1>Privacy Policy</h1>
      </HeaderWrapper>
      <PolicyWrapper>
        <PolicyText>
          <h2>Effective Date: June 22, 2024</h2>

          <br />
          <h2>Introduction</h2>
          <p>
            Welcome to AICVPro. We respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our website and services, including the AICVPro Chrome Extension.
          </p>

          <br />
          <h2>Information We Collect</h2>
          <p>We collect various types of information in connection with the services we provide, including:</p>
          <Ul>
            <Li><strong>Personal Information:</strong> This may include your name, email address, contact information, and any other details you provide when you create an account or contact us for support.</Li>
            <Li><strong>Usage Data:</strong> We collect information on how you use our services, such as the types of resumes you upload, the features you use, and the time and duration of your activities.</Li>
            <Li><strong>Technical Data:</strong> This includes your IP address, browser type, operating system, and other technical information collected when you use our website or Chrome Extension.</Li>
          </Ul>

          <br />
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <Ul>
            <Li>Provide, operate, and maintain our services.</Li>
            <Li>Improve, personalize, and expand our services.</Li>
            <Li>Understand and analyze how you use our services.</Li>
            <Li>Develop new products, services, features,
              and functionality.</Li>
            <Li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the service, and for marketing and promotional purposes.</Li>
            <Li>Process your transactions and manage your orders.</Li>
            <Li>Find and prevent fraud.</Li>
          </Ul>

          <br />
          <h2>How We Share Your Information</h2>
          <p>We do not share your personal information with third parties without your consent, except in the following circumstances:</p>
          <Ul>
            <Li>With service providers and partners who perform services on our behalf.</Li>
            <Li>In connection with the sale, merger, or acquisition of all or a portion of our business.</Li>
            <Li>To comply with legal obligations, enforce our policies, and protect our rights and the rights of others.</Li>
          </Ul>

          <br />
          <h2>Security of Your Information</h2>
          <p>We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

          <br />
          <h2>Your Privacy Rights</h2>
          <p>You have certain rights regarding your personal information, including the right to access, correct, or delete the information we hold about you. If you wish to exercise any of these rights, please contact us at the contact details provided below.</p>

          <br />
          <h2>Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.</p>

          <br />
          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>Email: support@aicvpro.com</p>

        </PolicyText>
      </PolicyWrapper>
    </Wrapper>
  );
};

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

const PolicyWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PolicyText = styled.div`
  background: linear-gradient(
    90deg,
    rgba(85, 3, 251, 0.1) -9.44%,
    rgba(254, 168, 2, 0.1) 99.42%
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

const Ul = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const Li = styled.li`
  margin-bottom: 10px;
`;

export default PrivacyPolicy;
