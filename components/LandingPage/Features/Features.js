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
    <SectionTitle data-aos="fade-up">Key Features</SectionTitle>
    <SectionSubtitle data-aos="fade-up" data-aos-delay="100">Explore What Sets Our App Apart!</SectionSubtitle>
    <TabsWrapper data-aos="fade-up" data-aos-delay="200">

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
                className={`${
                  activeTab === index + 1 ? 'active' : ''
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
    position: relative;
    padding: 60px 0 80px;
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

const TabsWrapper = styled.div``;

const TitlesWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: ${colors.Magnolia};
    position: relative;

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

    &.active {
        color: ${colors.HanPurple};
        border-bottom-color: ${colors.HanPurple};
    }

    &:hover {
        color: ${colors.ErrieBlack};
    }

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
    margin: auto;

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
    transform: translateX(100%);
    transition: all 0.2s ease-in-out;
    background-color: #fff;

    &.active {
        position: relative;
        transform: translateX(0);
    }

    &.prev {
        transform: translateX(-100%);
    }
`;

const LargeImageWrapper = styled.div`
    height: 340px;
    width: 520px;
    margin: 0 auto;
    margin-top: 63px;

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
