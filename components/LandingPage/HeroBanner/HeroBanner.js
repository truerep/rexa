import React, {
  useState
} from 'react';
import styled from 'styled-components';
import {
  LoginForm,
  Modal
} from '@/components/common';

const HeroBanner = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Section>
      <Wrapper className="container">
        <Container className="align-center">
          <Content>
            <Tagline data-aos="fade-up">Unleash Your Thoughts</Tagline>
            <InfoLine data-aos="fade-up" data-aos-delay="150">
              Capture thoughts effortlessly, organize seamlessly: your resume, your way.
            </InfoLine>
            <ActionLinks data-aos="fade-up" data-aos-delay="300" className="d-flex align-center">
              <button onClick={() => setShowModal(true)} className="btn-primary">
                Get Started
              </button>
              <a data-aos="fade-up" data-aos-delay="400" href="#features">Know more</a>
            </ActionLinks>
          </Content>
          <BannerImg>
            <img className="move-img" src="/assets/images/app-download-image.png" alt="app-img" />
            <img className="move-img" src="/assets/images/app-banner-image.png" alt="app-img" />
          </BannerImg>
        </Container>
      </Wrapper>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <LoginForm />
      </Modal>
    </Section>
  );
};
const Section = styled.div`
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.07;
    z-index: -1;
    background-position: 100px center;
    background-size: contain;
    background-image: url("/assets/images/wave-bg.webp");
  }

  @media (max-width: 1200px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Wrapper = styled.div`
  padding: 100px 0 50px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 48% 45%;
  min-height: 570px;
  position: relative;

  @media (max-width: 576px) {
   grid-template-columns: 100% 0; 
   text-align: center;
   min-height: unset;
  }
`;

const Content = styled.div`
  margin-top: -150px;
  @media (max-width: 576px) {
   margin-top: unset; 
  }
`;

const Tagline = styled.h2`
  font-size: 48px;
  line-height: 1.4;

  @media (max-width: 576px) {
    font-family: martel;
  }
`;

const InfoLine = styled.p`
  max-width: 360px;
  padding: 20px 0 30px;
  font-size: 19px;
  line-height: 1.6;

  @media (max-width: 576px) {
    max-width: unset;
  }
`;

const BannerImg = styled.div`
  display: flex;
  align-items: center;

  img {
    flex: 1;
    width: 100px;

    &:nth-child(1) {
      animation-delay: 1.5s;
    }

    &:nth-child(2) {
      margin-top: 100px;
    }
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

const ActionLinks = styled.div`
  button {
    font-size: 17px;
  }

  a {
    display: inline-block;
    margin-left: 20px;
    font-weight: 500;
  }

  @media (max-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default HeroBanner;
