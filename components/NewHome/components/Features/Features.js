import React from 'react';
import styled from 'styled-components';
import {
  SectionTitle
} from '@/components/common/UiElements';
import {
  colors
} from '@/helpers';

const Features = ({
  featuresData,
  activeTab,
  setActiveTab
}) => (
  <Section id="features" className="container">
    <SectionTitle data-aos="fade-up" data-aos-delay="100">How it works</SectionTitle>
    {/* <SectionSubtitle data-aos="fade-up" data-aos-delay="100">Explore What Sets Our App Apart!</SectionSubtitle> */}
    <TabsWrapper data-aos="fade-up"
      data-aos-delay="100">

      <TitlesWrapper
        tabWidth={100 / featuresData.length}
        tabPosition={(100 / featuresData.length) * (activeTab - 1)}
      >
        {featuresData.length
          && featuresData.map((button, index) => (
            <Title
              key={index}
              className={activeTab === index + 1 ? 'active' : ''}
              onClick={() => setActiveTab(index + 1)}
            >
              {button.title}
            </Title>
          ))}
      </TitlesWrapper>

      <TabBody data-aos="fade-up" data-aos-delay="100">
        {featuresData.length
          && featuresData.map((data, index) => (
            <TabItem
              key={index}
              className={`${activeTab === index + 1 ? 'active' : ''
                } ${index < activeTab - 1 ? 'prev' : ''}`}
            >
              <LargeImageWrapper>
                <ImageLarge src={data.largeImg} />
              </LargeImageWrapper>
            </TabItem>
          ))}
      </TabBody>

    </TabsWrapper>
  </Section>
);

const Section = styled.div`
    display: flex;
    padding: 60px 0 80px;
    flex-direction: column;
    h2, h3 {
        color: ${colors.ErrieBlack};
    }

    @media (max-width: 768px) {
      padding: 30px 0;
      overflow: hidden;
      box-sizing: border-box;
    }

    @media (max-width: 576px) {
      h3 {
        padding-bottom: 20px;
      }
    }
`;

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const TitlesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    flex: 1;
    justify-content: space-around;
    margin: 0 20px;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: ${(props) => props.tabPosition}%;
        height: 1px;
        transition: all 0.15s ease-in-out;
        width: ${(props) => props.tabWidth}em;
    }

    @media (max-width: 576px) {
      flex-direction: row;
      justify-content: space-between;
      &::after {
        content: unset;
      }
    }
`;

const Title = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.LightLavender};
    color: ${colors.ErrieBlack};
    font-size: 15px;
    padding: 23px 0;
    transition: all 0.15s ease-in-out;
    border: 1px solid transparent;
    width: 100%;
    height: 20px;
    border-radius: 10px;
    

    &.active {
        color: ${colors.GhostWhite};
        background-color: ${colors.Lavender}
    }

    @media (max-width: 992px) {
      padding: 15px;
      height: 55px;
      font-size: 10px;
      white-space: normal;
      text-overflow: ellipsis;
    }

    @media (max-width: 576px) {
      padding: 10px;
      height: 40px;
      font-size: 5px;
      margin: 0 3px;
      text-overflow: ellipsis;
      text-align: center;
      white-space: normal;
    }
`;

const TabBody = styled.div`
    position: relative;
    overflow: hidden;
    padding: 20px;
    height: 500px;
    width: 600px;
    margin: 0 20px;
    flex: 5;

    @media (max-width: 576px) {
      margin: 0;
      width: 100%;
      height: unset;
      box-sizing: border-box;
    }
`;

const TabItem = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: none;
    background-color: #fff;

    &.active {
        display: flex;
    }

    &.prev {
        display: none;
    }
    
`;

const LargeImageWrapper = styled.div`
    height: 100%;
    width: 100%;

    @media (max-width: 576px) {
      height: 100%;
      width: 100%;
      margin-top: 0;
    }
`;

const ImageLarge = styled.img`
    height: 100%;
    width: 100%;
    object-fit: fill;
    border-radius: 10px;
    animation: scaleIn 0.2s ease;

    @keyframes scaleIn {
      0% {
        display: none;
        transform: scale(1.05);
      }
      100% {
        display: block;
        transform: scale(1);
      }
    }

    @media (max-width: 576px) {
      object-fit: contain;
    }
`;

export default Features;
