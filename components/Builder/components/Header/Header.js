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
  handleSaveDataLocally,
  builderActionsList,
  toggleDropdown,
  setToggleDropdown,
  dropdownRef,
  resumeName,
  setResumeName,
  showTemplates,
  setShowTemplates,
  showJdModal,
  setShowJdModal,
  togglePreview,
  handleRouteToDashboard,
  resumeDataExists,
  handleSaveResume
}) => {

  return (
    <Wrapper className={togglePreview || resumeDataExists ? 'hide' : ''}>
      <TemplateNameWrapper>
        <BackBtn onClick={handleRouteToDashboard}>
          <Tooltip title="Dashboard">
            <Icon src="/assets/icons/dashboard-icon-light.svg" />
          </Tooltip>
        </BackBtn>
        <InputWrapper>
          <Input
            onChange={(e) => setResumeName(e.target.value)}
            placeholder="Resume Name"
            value={resumeName}
            onKeyDown={(e) => e.key === 'Enter' && handleSaveResume()}
          />
        </InputWrapper>
      </TemplateNameWrapper>
      <BuilderActions>
        {builderActionsList.map((action) => (
          <Tooltip title={action?.tooltip}>
            <ActionButton onClick={action?.handleClick}>
              <Icon src={action?.iconUrl} />
              <ActionName>
                {action?.name}
              </ActionName>
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
            <div ref={dropdownRef}>
              {
                toggleDropdown ? (
                  <Dropdown>
                    <Button onClick={handleRouteToDashboard}>
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
            </div>
          </AccountInfoWrapper>
        ) : (
          <AccountInfo onClick={handleSaveDataLocally}>
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
    gap: 10px;
`;

const ActionButton = styled.button`
    padding: 11px;
    transform: unset!important;
    transition: none!important;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
        background-color: ${colors.ChineseBlack};
    }
`;

const Icon = styled.img`
    height: 16px;
    flex-shrink: 0;
`;

const ActionName = styled.p`
    font-size: 14px;
    color: #fff;
`;

const TemplateNameWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-left: 18px;
`;

const BackBtn = styled(ActionButton)`
    padding: 0 8px;
    height: 100%;

    img {
        width: unset;
        height: 16px;
        transform: translateY(3px);
    }
`;

const InputWrapper = styled.div`
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    margin-left: 10px;
    border: 1px solid ${colors.Quartz};

    &:hover {
      border-color: #fff;
    }

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 30px;
      background-color: ${colors.Quartz};
      background-image: url('/assets/icons/edit-icon-light.svg');
      background-size: 12px;
      background-position: center;
      background-repeat: no-repeat;
      pointer-events: none;
    }
`;

const Input = styled.input`
    padding: 3px 10px;
    background: transparent;
    color: #fff;
    outline: 0;
    border: 0;
    font-size: 15px;
    border-radius: 5px;
    max-width: 180px;
    position: relative;
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
