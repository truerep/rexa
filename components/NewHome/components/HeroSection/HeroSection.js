import Create from '@/components/Create';
import { Popover } from '@/components/common';
import { DarkBtn } from '@/components/common/UiElements';
import React from 'react'
import styled from 'styled-components'

const HeroSection = ({
  toggleCreate,
  setToggleCreate
}) => {
  return (
    <Wrapper>
      <CardItem>
        <CardInfo>
          <CardTitle data-aos="fade-up">
            Create AI Powered Resume
          </CardTitle>
          <CardCaption data-aos="fade-up" data-aos-delay="100">
            Generate Resume Effortlessly <br />
            Optimize Seamlessly
          </CardCaption>
          <button 
            data-aos="fade-up"
            data-aos-delay="200"
            type="button"
            onClick={() => setToggleCreate(true)}
            className='btn-primary'
          >
            Get Started
          </button>
        </CardInfo>
        <CardFigure>
          <Figure className='round-corners' src="/assets/images/builder-page-image.png" alt="figure" />
        </CardFigure>
      </CardItem>
      <Popover
        showModal={toggleCreate}
        setShowModal={setToggleCreate}
        haveMarginTop
      >
        <Create />
      </Popover>
      <BgImages>
        <BgImageItem className='item-1' src='/assets/icons/gradients/peach.png' alt="bg-1" />
        <BgImageItem className='item-2' src='/assets/icons/gradients/blue.png' alt="bg-2" />
        <BgImageItem className='item-3' src='/assets/icons/gradients/light-blue.png' alt="bg-3" />
        <BgImageItem className='item-4' src='/assets/icons/gradients/green.png' alt="bg-4" />
      </BgImages>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 110px 20px 0;
  height: 100%;
  position: relative;
  z-index: 0;

  @media (max-width: 992px) {
    padding: 150px 20px 50px;
  }
`;

const BgImages = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
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

const CardItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  gap: 30px;
`;

const CardInfo = styled.div`
  text-align: center;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  button {
    margin-top: 50px;
    font-size: 21px; 
    font-weight: 500;
    border: 1px solid #6725f4;
  }

  @media (max-width: 1200px) {
    padding: 0 0 30px;
    min-width: unset;

    button {
      margin-top: 30px;
      font-size: 15px;
    }
  }

  @media (max-width: 576px) {
    min-height: unset;

    button {
      font-size: 14px;
      font-weight: 500;
      margin-top: 20px;
    }
  }
`;

const CardFigure = styled.div`
  height: unset;
  flex: 1;
  overflow: hidden;
  display: grid;
  place-items: center;
  max-width: 850px;
  margin-bottom: 170px; 
  transform: perspective(500px) rotateX(3deg) rotateY(-4deg) rotateZ(9deg) translateX(-50px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.01);
  border-radius: 20px;
  border: 20px solid #bec2d6;

  @media (max-width: 576px) {
    display: none;
  }
`;

const Figure = styled.img`
  width: 100%;
  border-radius: 20px;
  transform: scaleX(1.04) scaleY(1.07);

  &.round-corners {
    border-radius: 20px;
  }

  @media (max-width: 992px) {
    height: unset; 
    width: 100%;
  }
`;

const CardTitle = styled.h1`
  font-size: 50px;
  font-weight: 500;
  background: linear-gradient(90deg, #5200FF 0%, #FFA800 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 1200px) {
    font-size: 33px;
  }

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

const CardCaption = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin-top: 25px;
  line-height: 1.6;

  @media (max-width: 1200px) {
    font-size: 20px;
    margin-top: 10px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

const ActionLinks = styled.div`
  display: flex;
  gap: 10px;
`;

export default HeroSection