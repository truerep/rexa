import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {
  useRouter
} from 'next/router';
import {
  colors
} from '@/helpers';

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
    <HeaderWrapper>
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
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    max-width: 80%;
    margin: 0 auto;

    @media (max-width: 1200px) {
      max-width: 100%;
    }

    @media (max-width: 576px) {
      justify-content: unset;
    }
`;

const LogoWrapper = styled.div`
    z-index: 9;
`;

const Logo = styled.img`
    height: 70px;
    transform: translateY(-4px);
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
        padding-top: 80px;

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
    }
`;

const DownloadAppBtn = styled.a`
    font-size: 17px;
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
