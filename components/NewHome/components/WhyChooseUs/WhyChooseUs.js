import { SectionTitleLight } from '@/components/common/UiElements';
import React from 'react'
import styled from 'styled-components';

const WhyChooseUs = () => {
  return (
    <Wrapper>
        <div className="container">
            <SectionTitleLight data-aos="fade-up" className='text-center'>Features of <span>AiCvPro</span></SectionTitleLight>
            <CardsWrapper>
                <CardItem data-aos="fade-up">
                    <CardIcon src='/assets/icons/choose-us/editable.svg' alt='icon' />
                    <CardTitle>Easy Customization</CardTitle>
                    <CardInfo>Personalize your resume with our new age intuitive tools.</CardInfo>
                </CardItem>
                <CardItem data-aos="fade-up" data-aos-delay="100">
                    <CardIcon src='/assets/icons/choose-us/ai.svg' alt='icon' />
                    <CardTitle>AI-Powered Editing</CardTitle>
                    <CardInfo>Enhance and modify your resume with AI-driven suggestions.</CardInfo>
                </CardItem>
                <CardItem data-aos="fade-up" data-aos-delay="200">
                    <CardIcon src='/assets/icons/choose-us/professional.svg' alt='icon' />
                    <CardTitle>Professional Templates</CardTitle>
                    <CardInfo>Choose from a variety of modern, professionally designed templates.</CardInfo>
                </CardItem>
                <CardItem data-aos="fade-up" data-aos-delay="300">
                    <CardIcon src='/assets/icons/choose-us/ats-friendly.svg' alt='icon' />
                    <CardTitle>ATS Friendly</CardTitle>
                    <CardInfo>Ensure your resume gets noticed by Applicant Tracking Systems.</CardInfo>
                </CardItem>
            </CardsWrapper>
        </div>
        <BgImages>
            <BgImageItem className='item-1' src='/assets/icons/gradients/peach.png' alt="bg-1" />
            <BgImageItem className='item-2' src='/assets/icons/gradients/blue.png' alt="bg-2" />
            <BgImageItem className='item-3' src='/assets/icons/gradients/light-blue.png' alt="bg-3" />
            <BgImageItem className='item-4' src='/assets/icons/gradients/green.png' alt="bg-4" />
        </BgImages>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #000;
  padding: 120px 20px 160px;
  color: #fff;
  position: relative;

  .container {
    z-index: 1;
    position: relative;
  }

  @media (max-width: 576px) {
    padding: 70px 20px 100px;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-top: 70px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    padding-top: 40px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardItem = styled.div`
    padding: 30px 25px;
    border-radius: 8px;
    // background-color: #121212;
    background-color: rgba(18, 18, 18, 1);
`;

const CardIcon = styled.img`
  margin-bottom: 18px;
  height: 40px;
`;

const CardTitle = styled.h3`
    margin-bottom: 16px;
    color: #fff;
    font-size: 22px;
    line-height: 40px;
    font-weight: 700;
    letter-spacing: -0.01em;
    font-family: Martel;
    white-space: pre;
`;

const CardInfo = styled.p`
  color: hsla(0, 0%, 100%, 0.7);
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
`;

const BgImages = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  opacity: 0.5;
`;

const BgImageItem = styled.img`
  position: absolute;

  &.item-1 {
    top: 0;
    left: -25%;
    width: 50%;
  }

  &.item-2 {
    top: -10%;
    right: -45%;
    width: 100%;
    opacity: 0.8;
  }

  &.item-3 {
    bottom: -30%;
    left: -45%;
    width: 100%;
    opacity: 0.7;
  }

  &.item-4 {
    bottom: -10%;
    right: -20%;
    width: 50%;
    opacity: 0.5;
  }
`;

export default WhyChooseUs