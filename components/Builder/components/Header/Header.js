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
import {
  Modal,
  Popover
} from '@/components/common';
import {
  JdModal
} from '../TemplateZone/components';

import TemplateSwitcher from '../TemplateSwitcher';

const Header = ({
  userData,
  handleLogout,
  builderActionsList,
  toggleDropdown,
  setToggleDropdown,
  resumeName,
  setResumeName,
  showTemplates,
  setShowTemplates,
  showJdModal,
  setShowJdModal,
  togglePreview
}) => {
  const router = useRouter();

  return (
    <Wrapper className={togglePreview ? 'hide' : ''}>
      <TemplateNameWrapper>
        <BackBtn onClick={() => router.push('/dashboard')}>
          <Tooltip title="Dashboard">
            <Icon src="/assets/icons/arrow-left-light.svg" />
          </Tooltip>
        </BackBtn>
        <Input
          onChange={(e) => setResumeName(e.target.value)}
          placeholder="Resume Name"
          value={resumeName}
        />
      </TemplateNameWrapper>
      <BuilderActions>
        {builderActionsList.map((action) => (
          <Tooltip title={action?.tooltip}>
            <ActionButton onClick={action?.handleClick}>
              <Icon src={action?.iconUrl} />
            </ActionButton>
          </Tooltip>
        ))}
      </BuilderActions>
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
                <Dropdown>
                  <Button onClick={handleLogout}>Logout</Button>
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
      <Popover
        showModal={showTemplates}
        setShowModal={setShowTemplates}
      >
        <TemplateSwitcher />
      </Popover>
      <Modal
        showModal={showJdModal}
        setShowModal={setShowJdModal}
      >
        <JdModal />
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    background: ${colors.CharlestonGreen}; 
    color: #fff;
    display: flex;
    justify-content: space-between;
    transition: all 0.2s ease-in-out;

    &.hide {
      transform: translateY(-101%);
    }

    @media print {
        display: none;

        * {
          display: none!important;
        }
    }
`;

const BuilderActions = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
`;

const ActionButton = styled.button`
    padding: 13px 11px 9px;
    transform: unset!important;
    transition: none!important;

    &:hover {
        background-color: ${colors.ChineseBlack};
    }
`;

const Icon = styled.img`
    width: 16px;
`;

const TemplateNameWrapper = styled.div`
    display: flex;
    padding-left: 18px;
`;

const BackBtn = styled(ActionButton)`
    padding: 0 8px;

    img {
        width: unset;
        height: 13px;
    }
`;

const Input = styled.input`
    padding: 5px;
    margin-left: 10px;
    background: transparent;
    color: #fff;
    outline: 0;
    border: 0;
    font-size: 16px;
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
  min-width: calc(100% + 20px);
`;

const Button = styled.button`
  padding: 5px 15px;
  font-size: 12px;
  color: #fff;
  transform: unset!important;
`;

export default Header;
