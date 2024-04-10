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
  builderActionsList,
  resumeName,
  setResumeName,
  showTemplates,
  setShowTemplates,
  showJdModal,
  setShowJdModal
}) => {
  const router = useRouter();

  return (
    <Wrapper>
      <TemplateNameWrapper>
        <BackBtn onClick={() => router.push('/create')}>
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
      <AccountInfo onClick={() => router.push(`${appEnv.API_URL}/api/auth/google`)}>
        <Tooltip title="Login">
          <LoginBtn>Login</LoginBtn>
        </Tooltip>
      </AccountInfo>
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

export default Header;
