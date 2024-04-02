import React from 'react';
import styled from 'styled-components';
import {
  Swiper, SwiperSlide
} from 'swiper/react';
import {
  EffectCards, Pagination
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import {
  colors
} from '@/helpers';
import templatesData from './templatesData';

const TemplateSwitcher = ({templateId, setTemplateId, handleTemplateChange}) => (
  <Wrapper>
    <TemplatesWrapper>
      <Swiper
        effect="cards"
        grabCursor
        pagination={{
          dynamicBullets: true
        }}
        cardsEffect={{
          slideShadows: false
        }}
        modules={[EffectCards, Pagination]}
        className="mySwiper"
      >
        {Object.keys(templatesData).length
        && Object.entries(templatesData).map(([templateId, template]) => (
          <SwiperSlide>
            {({isActive}) => (
              <>
                {isActive && setTemplateId(templateId)}
                <TemplateBg style={{backgroundImage: `url(${template?.thumbnail})`}} />
                <img
                  src={template?.thumbnail}
                  alt={template?.name}
                />
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </TemplatesWrapper>
    <TemplateInfo>
      <TemplateName>
        {templatesData[templateId]?.name}
      </TemplateName>
      <TemplatePrice>
        {templatesData[templateId]?.price ?? 'Free'}
      </TemplatePrice>
      <button
        onClick={handleTemplateChange}
        type="button"
        className="btn-primary"
      >
        Use Now
      </button>
      <button
        type="button"
        className="btn-primary btn-outlined"
      >
        Preview
      </button>
    </TemplateInfo>
  </Wrapper>
);

const Wrapper = styled.div`
    color: ${colors.ErrieBlack};
    height: 100%;
    display: flex;
`;

const TemplatesWrapper = styled.div`
    flex: 1;
    height: 100%;
    background: ${colors.GhostWhite};
    border-right: 2px solid ${colors.LightLavender};
    max-width: 50%;
    padding: 50px 0; 
    user-select: none;
`;

const TemplateBg = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(10px);
      z-index: -1;
    }
`;

const TemplateInfo = styled.div`
    padding: 100px 50px 50px;
    overflow: auto;
    flex: 1;
    max-width: 50%;

    button {
      margin-top: 30px;
      margin-right: 20px;
    }
`;

const TemplateName = styled.h2`
    font-size: 24px;
`;

const TemplatePrice = styled.h3`
    font-size: 18px;
    opacity: 0.8;
`;

export default TemplateSwitcher;
