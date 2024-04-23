import React from 'react';
import styled from 'styled-components';

import {
  Tooltip
} from 'react-tippy';
import {
  useRouter
} from 'next/router';
import {
  appEnv,
  colors
} from '@/helpers';

const Header = ({
  userData,
  handleLogout,
  toggleDropdown,
  setToggleDropdown,
  dropdownRef
}) => {
  const router = useRouter();

  return (
    <Wrapper>
      <TemplateNameWrapper>
        <Icon src="/assets/icons/dashboard-icon-light.svg" />
        <PageTitle>Dashboard</PageTitle>
      </TemplateNameWrapper>
      {
        Object.keys(userData).length > 0 ? (
          <AccountInfoWrapper>
            <UserWrapper onClick={() => setToggleDropdown(!toggleDropdown)}>
              <UserImg src={userData?.picture} />
              <Username>{userData?.firstName}</Username>
              <DownArrowIcon src="/assets/icons/arrow-down-light.svg" />
            </UserWrapper>
            {
              toggleDropdown ? (
                <Dropdown ref={dropdownRef}>
                  <Button onClick={() => router.push('/dashboard')}>
                    <Icon src="/assets/icons/dashboard-icon-light.svg" />
                    <span>Dashboard</span>
                  </Button>
                  <Button onClick={handleLogout}>
                    <Icon src="/assets/icons/logout-icon-light.svg" />
                    <span>Logout</span>
                  </Button>
                </Dropdown>
              ) : ('')
            }
          </AccountInfoWrapper>
        ) : (
          <AccountInfo onClick={() => router.push(`${appEnv.API_URL}/api/auth/google`)}>
            <LoginBtn>Login</LoginBtn>
          </AccountInfo>
        )
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
    background: ${colors.CharlestonGreen}; 
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 7px 0;

    @media print {
        display: none;

        * {
          display: none!important;
        }
    }
`;

const Icon = styled.img`
    width: 16px;
`;

const TemplateNameWrapper = styled.div`
    display: flex;
    padding-left: 28px;
`;

const PageTitle = styled.div`
    color: #fff;
    font-size: 16px;
    padding: 5px;
    margin-left: 10px;
`;

const AccountInfo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 28px;
`;

const LoginBtn = styled.button`
    transform: unset!important;
    transition: none!important;
    background: ${colors.VoiletBlue};
    font-size: 12px;
    font-size: 14px;
    padding: 4px 12px;
    color: #fff;
    border-radius: 3px
`;

const AccountInfoWrapper = styled.div`
  align-self: center;
  position: relative;
  margin-right: 28px;
`;

const UserWrapper = styled.div`
  background: ${colors.Quartz};
  padding: 4px 5px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const UserImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const Username = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin: 0 20px 0 10px;
`;

const DownArrowIcon = styled.img`
  height: 7px;
  margin-right: 2px;
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  z-index: 1;
  background: ${colors.CharlestonGreen};
  min-width: calc(100% + 50px);
  border-radius: 5px;
  overflow: hidden;
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 13px;
  color: #fff;
  transform: unset!important;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: left;

  img {
    height: 13px;
    width: 13px;
    object-fit: contain;
  }

  &:hover {
    background-color: ${colors.Quartz};
  }
`;

export default Header;
