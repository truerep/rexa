import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import {
  colors
} from '@/helpers';
import {
  SectionDark,
  SectionSubtitle,
  SectionTitle
} from '@/components/common/UiElements';

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false
});

const GrowthCards = ({
  growthData
}) => (
  <SectionDark id="app-metrics">
    <SectionTitle data-aos="fade-up">App Metrics</SectionTitle>
    <SectionSubtitle data-aos="fade-up" data-aos-delay="100">See How Our App is Making an Impact!*</SectionSubtitle>
    <ContentWrapper className="container">
      {growthData.map((item, index) => (
        <Card data-aos="fade-up" data-aos-delay={200 + index * 200}>
          <Icon src={item.icon} />
          <h2>{item.name}</h2>
          <AnimatedNumbers
            includeComma
            transitions={() => {
              return {
                type: 'spring',
                duration: index + 1,
                delay: 0.2 + index * 0.2
              };
            }}
            animateToNumber={item.numbers}
            fontStyle={{
              fontSize: 20,
              color: '#fff',
              textAlign: 'center',
              fontWeight: 400
            }}
          />
        </Card>
      ))}
    </ContentWrapper>
    <Asterisk>
      *Numbers are not real, just for demo purposes.
    </Asterisk>
  </SectionDark>
);

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Asterisk = styled.p`
  text-align: center;
  margin-top: 20px;
  color: #fff;
`;

const Card = styled.div`
    border: 1px solid #fff;
    background: #783df6;
    padding: 30px 20px;
    border-radius: 10px;
    color: #fff;
    text-align: center;
    box-shadow: inset 0 0 20px 0 rgba(255,255,255,0.5);

    h2 {
        font-size: 28px;
        padding: 20px 0;
    }

    span {
        div {
            justify-content: center;
        }
    }
`;

const Icon = styled.img`
    height: 60px;
`;

export default GrowthCards;
