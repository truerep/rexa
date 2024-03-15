import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  colors
} from '@/helpers';

const Footer = () => (
  <Wrapper>
    <Context className="container">
      <Copyright>
        &copy; 2024 Resume Sync. All Rights Reserved
      </Copyright>
      <Nav>
        <Link href="/">FAQs</Link>
        <Link href="/">Social</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Terms & Conditions</Link>
        <Link href="/">Legal</Link>
        <Link href="/">Contact</Link>
      </Nav>
    </Context>
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: ${colors.DarkGunmetal};
  font-size: 14px;
  color: #fff;
  padding: 10px 0;
`;

const Context = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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

const Copyright = styled.p`
  opacity: 0.8;
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

export default Footer;
