import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {
  useRouter
} from 'next/router';
import {
  colors
} from '@/helpers';
import Image from 'next/image';

const Header = ({
  isAuthorized,
  navMenu,
  toggleNav,
  setToggleNav
}) => {
  const router = useRouter();

  const LogoUrl = '/assets/images/company-logo.svg';
  const hamburgerIcon = 'https://ik.imagekit.io/sahildhingra/hamburger-dark.png';

  return (
    <HeaderWrapper id="header">
      <LogoWrapper className="d-flex align-center">
        <Logo src={LogoUrl} alt="Resume Sync" />
        {/* <ProductName>| Resume</ProductName> */}
      </LogoWrapper>
      <Nav className={toggleNav ? 'toggled' : ''}>
        {
          navMenu && navMenu.map((menuItem) => (
            <Item>
              <Link href={menuItem?.url}>
                {menuItem?.name}
              </Link>
            </Item>
          ))
        }
      </Nav>
      <AddtoChromeBtn target="_blank" href="https://chromewebstore.google.com/detail/ai-cv-pro/inkipncofmmbnabhkgoahpagmbakhjcb?authuser=1&hl=en" className="btn-primary">
        <Image src="/assets/icons/chrome-icon.svg" width={20} height={20} alt="chrome-icon" />
        Add to Chrome
      </AddtoChromeBtn>

      {
        isAuthorized ? (
          <DownloadAppBtn onClick={() => router.push('/dashboard')} className="btn-primary btn-outlined">
            Dashboard
          </DownloadAppBtn>
        ) : (
          <DownloadAppBtn onClick={() => router.push('/authenticate?login')} className="btn-primary btn-outlined">
            Login
          </DownloadAppBtn>
        )
      }

      <NavButton onClick={() => setToggleNav(!toggleNav)}>
        <img src={hamburgerIcon} alt="menu" />
      </NavButton>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    max-width: 50%;
    margin: 0 auto;
    border : 1px solid #e5e5e5;
    border-radius: 20px;
    margin-top: 20px;

    @media (max-width: 1200px) {
      max-width: 100%;
    }

    @media (max-width: 576px) {
      justify-content: unset;
      margin: 20px;
    }
`;

const LogoWrapper = styled.div`
    z-index: 9;
`;

const Logo = styled.img`
    height: 70px;
    transition: all 0.5s;
    
    &:hover {
      transform: scale3d(0.9, 0.9, 0.9);
      cursor: pointer;
    }
`;

const AddtoChromeBtn = styled.a`
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 150px;
    background: #E8E8E8;
    border-radius: 15px;
    border: 0;
    color: #000;

    @media (max-width: 576px) {
      display: none;
    }
 `;


const ProductName = styled.h1`
    font-size: 22px;
    padding-left: 5px;
    font-family: martel;
    font-weight: 600;
`;

const NavButton = styled.button`
    border: 0;
    background: transparent;
    display: none;
    z-index: 9;

    img {
        height: 22px;
    }

    @media (max-width: 768px) {
        display: block;
    }
`;

const Nav = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
        position: fixed;
        flex-direction: column;
        background: #fff;
        height: 100vh;
        width: 100vw;
        top: 0;
        right: 0;
        z-index: 8;
        align-items: flex-start;
        padding-top: 120px;

        a {
            padding: 10px 20px!important;
        }

        &.toggled {
            display: flex;
        }
    }
`;

const Item = styled.li`
    a {
        display: block;
        padding: 20px 20px;
        color: #351C42;
        font-size: 16px;
        font-weight: 500;

        &:hover, &.active {
            color: ${colors.HanPurple};
        }

        @media (max-width: 768px) {
          padding: 10px 30px!important;
        }
    }
`;

const DownloadAppBtn = styled.a`
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;

    @media (max-width: 576px) {
      padding: 5px 15px;
      font-size: 14px;
      margin-left: auto;
      margin-right: 20px;
    }
`;

export default Header;
