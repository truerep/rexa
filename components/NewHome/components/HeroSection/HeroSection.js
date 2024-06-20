import React from 'react'
import styled from 'styled-components'

const HeroSection = () => {
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
          <button className='btn-primary'>
            Get Started
          </button>
        </CardInfo>
        <CardFigure>
          <Figure className='round-corners' src="/assets/images/builder-page-image.png" alt="figure" />
        </CardFigure>
      </CardItem>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 110px 0 0 20px;
  height: 100%;
`;

const CardItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const CardInfo = styled.div`
  min-width: 550px;
  padding-right: 50px;

  button {
    margin-top: 50px;
    font-size: 21px;
    font-weight: 500;
  }
`;

const CardFigure = styled.div`
  height: 100%;
  flex: 1;
  overflow: hidden;
`;

const Figure = styled.img`
  height: 100%;

  &.round-corners {
    border-radius: 20px;
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
`;

const CardCaption = styled.p`
  font-size: 28px;
  margin-top: 25px;
`;

export default HeroSection