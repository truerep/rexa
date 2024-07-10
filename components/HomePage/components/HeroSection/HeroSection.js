import Create from '@/components/Create';
import { Popover } from '@/components/common';
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
          <CardTitle>
            Create AI Powered Resume
          </CardTitle>
          <CardCaption>
            Generate Resume Effortlessly <br />
            Optimize Seamlessly
          </CardCaption>
          <button 
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 110px 20px 0;
  height: 100%;

  @media (max-width: 992px) {
    padding: 150px 20px 50px;
  }
`;

const CardItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const CardInfo = styled.div`
  min-width: 550px;
  padding-right: 50px;
  
  button {
    margin-top: 50px;
    font-size: 21px;
  }

  @media (max-width: 1200px) {
    text-align: center;
    padding: 0 0 30px;
    min-width: unset;

    button {
      margin-top: 30px;
      font-size: 15px;
    }
  }

  @media (max-width: 576px) {
    button {
      font-size: 14px;
      font-weight: 500;
      margin-top: 20px;
    }
  }
`;

const CardFigure = styled.div`
  height: 100%;
  flex: 1;
  overflow: hidden;
  display: grid;
  place-items: center;

  @media (max-width: 992px) {
    height: unset;
  }
`;

const Figure = styled.img`
  width: 100%;

  &.round-corners {
    border-radius: 20px;
  }

  @media (max-width: 992px) {
    height: unset; 
    width: 100%;
  }
`;

const CardTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  font-family: Martel;
  background: linear-gradient(90deg, #5200FF 0%, #FFA800 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media (max-width: 1200px) {
    font-size: 33px;
  }

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

const CardCaption = styled.p`
  font-size: 28px;
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

export default HeroSection