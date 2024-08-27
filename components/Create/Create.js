import React from 'react';
import styled from 'styled-components';

import {
  colors
} from '@/helpers';

const Create = ({tabData, activeTab, setActiveTab}) => (
  <Wrapper>
    {/* <Logo src="/assets/images/company-logo.svg" /> */}
    <Container>
      <TabsWrapper>

        <TitlesWrapper
          tabWidth={100 / tabData.length}
          tabPosition={(100 / tabData.length) * (activeTab - 1)}
        >
          {tabData.length
      && tabData.map((button, index) => (
        <Title
          key={index}
          className={activeTab === index + 1 ? 'active' : ''}
          onClick={() => setActiveTab(index + 1)}
        >
          {button.title}
        </Title>
      ))}
        </TitlesWrapper>

        <TabBody>

          {tabData.length
      && tabData.map((data, index) => (
        <TabItem
          key={index}
          className={`${
            activeTab === index + 1 ? 'active' : ''
          } ${index < activeTab - 1 ? 'prev' : ''}`}
        >
          {data?.component ?? 'Coming Soon...'}
        </TabItem>
      ))}
        </TabBody>

      </TabsWrapper>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
    padding: 50px 20px;
    text-align: center;
`;

const Logo = styled.img`
    height: 120px;
`;

const Container = styled.div`
    border-radius: 20px;
    background: #fff;
    max-width: 900px;
    margin: 60px auto 10px;
    text-align: left;
    border: 1px solid ${colors.LightLavender};
    overflow: auto;
`;

const TabsWrapper = styled.div``;

const TitlesWrapper = styled.div`
    display: flex;
    align-items: center;
    // background-color: ${colors.Magnolia};
    position: relative;

    &::before {
      height: 2px;
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      background: #ededed;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: ${(props) => props.tabPosition}%;
        height: 2px;
        transition: all 0.15s ease-in-out;
        background-color: ${colors.HanPurple};
        width: ${(props) => props.tabWidth}%;
    }

    @media (max-width: 576px) {
      white-space: pre;
      overflow: scroll;

      &::after {
        content: unset;
      }
    }

    &::-webkit-scrollbar {
      height: 5px;
      background-color: transparent;
    }
`;

const Title = styled.button`
    cursor: pointer;
    flex: 1;
    background: transparent;
    outline: 0;
    border: 0;
    color: ${colors.ErrieBlack};
    font-size: 20px;
    padding: 23px 0;
    transition: all 0.15s ease-in-out;

    &.active, &.active:hover {
        color: ${colors.HanPurple};
    }

    &:hover {
        color: ${colors.ErrieBlack};
    }

    @media (max-width: 576px) {
      padding: 12px 15px;
      font-size: 16px;
    }
`;

const TabBody = styled.div`
    position: relative;
    overflow: hidden;
    padding: 20px;

    @media (max-width: 576px) {
      width: 100%;
      height: unset;
      box-sizing: border-box;
    }
`;

const TabItem = styled.div`
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    transform: translateX(100%);
    transition: all 0.2s ease-in-out;
    background-color: #fff;

    &.active {
        position: relative;
        transform: translateX(0);
    }

    &.prev {
      top: 20px;
      transform: translateX(-100%);
    }
`;

export default Create;
