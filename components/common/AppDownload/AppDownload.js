import React, {
  useState
} from 'react';
import styled from 'styled-components';
import {
  colors
} from '@/helpers';
import Modal from '../Modal';
import LoginForm from '../LoginForm';

const AppDownload = () => {
  // const [showModal, setShowModal] = useState(false);

  return (
    <Wrapper id="download-app" className="container">
      <Content>
        <Overview>
          <h3 data-aos="fade-up">AI CV Pro</h3>
          {/* <Ratings>
            <StarsWrapper data-aos="fade-up" data-aos-delay="100">
              <StarIcon src="/assets/icons/star-filled.png" />
              <StarIcon src="/assets/icons/star-filled.png" />
              <StarIcon src="/assets/icons/star-filled.png" />
              <StarIcon src="/assets/icons/star-filled.png" />
              <StarIcon src="/assets/icons/star-filled-half.png" />
            </StarsWrapper>
            <span data-aos="fade-up" data-aos-delay="150">4.5</span>
            <Dot data-aos="fade-up" data-aos-delay="200" />
            <span data-aos="fade-up" data-aos-delay="250">9,00,000 +  Downloads</span>
          </Ratings> */}
          <AppdownloadIcons>
            <a href="#home" data-aos="fade-up" data-aos-delay="300">
              <Icon src="/assets/icons/google-play-icon.svg" />
            </a>
            <a href="#home" data-aos="fade-up" data-aos-delay="350">
              <Icon src="/assets/icons/app-store-icon.svg" />
            </a>
          </AppdownloadIcons>
          <TryNowBtn data-aos="fade-up" data-aos-delay="500" href="#" className="btn-primary">
            <a href='#home'>
              Coming Soon
            </a>
          </TryNowBtn>
        </Overview>
        <AppImgWrapper>
          <img className="move-img" src="/assets/images/app-download-image.png" alt="app-img" />
        </AppImgWrapper>
      </Content>
      {/* <Modal
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <LoginForm />
      </Modal> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
    margin-top: 220px;
    margin-bottom: 130px;
    background: linear-gradient(to left, rgb(238, 231, 254), rgb(251, 245, 239));
    border-radius: 20px;

    @media (max-width: 1200px) {
      border-radius: 0; 
      margin-top: 0;  
      margin-bottom: 0; 
    }
`;

const Content = styled.div`
    padding: 50px 100px;
    display: flex;
    min-height: 350px;

    > div {
      flex: 1;
    }

    h3 {
        font-family: martel;
        font-size: 42px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }

    @media (max-width: 576px) {
      padding: 30px 20px;
    }
`;

const Overview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    @media (max-width: 768px) {
      align-items: center;
      padding-bottom: 50px;
    }

    @media (max-width: 576px) {
      h3 {
        font-size: 32px;
      }
    }
`;

const AppdownloadIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 30px 0 0;
`;

const Icon = styled.img`
    height: 60px;
    cursor: pointer;

  @media (max-width: 576px) {
    height: 40px;
  }
`;

const Ratings = styled.div`
    display: flex;
    align-items: center;
`;

const StarsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`;

const StarIcon = styled.img`
    height: 22px;
`;

const Dot = styled.span`
    display: block;
    height: 5px;
    width: 5px;
    border-radius: 10px;
    background-color: ${colors.HanPurple};
    opacity: 0.5;
    margin: 0 20px;
`;

const TryNowBtn = styled.button`
    margin-top: auto;
    font-size: 17px;
    font-weight: 500;

    @media (max-width: 768px) {
      margin-top: 30px;
    }
`;

const AppImgWrapper = styled.div`
  position: relative;
  text-align: center;

  img {
    position: absolute;
    width: 200px;
    bottom: -120px;
    right: 60px;
  }

  @media (max-width: 768px) {
    img {
      position: relative;
      right: unset;
      bottom: unset;
      width: 200px;
    }
  }
`;

export default AppDownload;
