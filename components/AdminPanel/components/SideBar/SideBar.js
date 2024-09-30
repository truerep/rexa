import { colors } from '@/helpers';
import React from 'react'
import styled from 'styled-components';

const SideBar = ({
  pathname,
  primaryMenu,
  secondryMenu
}) => {
  return (
    <Wrapper>
      {console.log(pathname)}
      <LogoWrapper>
        <Logo src="/assets/images/company-logo.svg" alt="company logo" />
      </LogoWrapper>
      <MenuWrapper>
        <PrimaryMenu>
          {
            primaryMenu.length ? primaryMenu.map((menuItem) => (
              <MenuItem
                className={menuItem?.activeFor.includes(pathname) ? 'active': ''}
                onClick={menuItem?.handleClick}
              >
                <img src={menuItem?.icon} alt={menuItem?.name} />
                <span>{menuItem?.name}</span>
              </MenuItem>
            )) : null
          }
        </PrimaryMenu>
        <SecondryMenu>
          {
            secondryMenu.length ? secondryMenu.map((menuItem) => (
              <MenuItem onClick={menuItem?.handleClick}>
                <img src={menuItem?.icon} alt={menuItem?.name} />
                <span>{menuItem?.name}</span>
              </MenuItem>
            )) : null
          }
        </SecondryMenu>
      </MenuWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 220px;
  background-color: #fff;
  border-radius: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const Logo = styled.img`
  height: 80px;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const PrimaryMenu = styled.ul`
  flex: 1;
  overflow: auto;
  padding: 0 10px;
`;

const SecondryMenu = styled.ul`
  margin-bottom: 10px;
  padding: 0 10px;
`;

const MenuItem = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 10px 13px;
  font-size: 16px;
  gap: 15px;
  color: ${colors.ErrieBlack};
  transition: all 0s ease-in-out;

  &:first-child {
    border-top: 1px solid ${colors.LavenderWeb};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${colors.LavenderWeb};
  }

  &.active, &:hover {
    transform: scale(1);
    border-radius: 4px;
    background-color: ${colors.LightLavender};
  }

  img {
    height: 18px;
  }
`;

export default SideBar