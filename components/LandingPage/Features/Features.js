import React from 'react';
import styled from 'styled-components';
import {
  SectionSubtitle, SectionTitle
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
    <SectionTitle >How it works</SectionTitle>
    {/* <SectionSubtitle data-aos="fade-up" data-aos-delay="100">Explore What Sets Our App Apart!</SectionSubtitle> */}
    <TabsWrapper >

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

      <TabBody>
        <MacMockup />
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
      white-space: pre;
      overflow: scroll;

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

    /* &:hover {
        color: ${colors.GhostWhite};
    } */

    @media (max-width: 576px) {
      padding: 20px;
    }
`;

const MacMockup = styled.div`
    background-image: url("/assets/images/macbook-mockup.png");
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;

    @media (max-width: 576px) {
      display: none;
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
    transform: translateY(100%);
    transition: all 0.3s ease-in-out;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    &.active {
        transform: translateX(0);
    }

    &.prev {
        transform: translateY(-100%);
    }
`;

const LargeImageWrapper = styled.div`
    height: 340px;
    width: 520px;

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

    @media (max-width: 576px) {
      object-fit: contain;
    }
`;

export default Features;
