import React from 'react';
import styled from 'styled-components';
import {
  colors
} from '@/helpers';
import {
  Popover
} from '@/components/common';
import TemplateSwitcher from '../TemplateSwitcher';

const Header = ({
  builderActionsList,
  showTemplates,
  setShowTemplates
}) => (
  <Wrapper>
    <TemplateNameWrapper>
      <BackBtn>
        <Icon src="/assets/icons/arrow-left-light.svg" />
      </BackBtn>
      <Input placeholder="Resume Name" value="Unnamed" />
    </TemplateNameWrapper>
    <BuilderActions>
      {builderActionsList.map((action) => (
        <ActionButton onClick={action?.handleClick}>
          <Icon src={action?.iconUrl} />
        </ActionButton>
      ))}
    </BuilderActions>
    <AccountInfo>
      <LoginBtn>Login</LoginBtn>
    </AccountInfo>
    <Popover
      showModal={showTemplates}
      setShowModal={setShowTemplates}
    >
      {/* <TemplatesSidebar /> */}
      <TemplateSwitcher />
    </Popover>
  </Wrapper>
);

const Wrapper = styled.div`
    background: ${colors.CharlestonGreen}; 
    color: #fff;
    display: flex;
    justify-content: space-between;

    @media print {
        display: none;
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
