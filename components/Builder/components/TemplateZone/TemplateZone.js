import React, {
  useContext, useEffect, useState
} from 'react';
import styled from 'styled-components';

import {
  ResumeContext
} from '@/context/ResumeContext';
import TemplateRender from './TemplateRender';
import {
  Modal
} from '@/components/common';
import {
  JdModal
} from './components';

// animations
import Lottie from "lottie-react";

const TemplateZone = ({
  showJdModal,
  setShowJdModal,
  animation,
  fact
}) => {
  const [templateId, setTemplateId] = useState();
  const { resumeData } = useContext(ResumeContext);

  useEffect(() => {
    setTemplateId(resumeData.templateId);
  }, [resumeData]);


  return (
    <Wrapper className={resumeData?.togglePreview ? 'scaleup' : ''}>
      {
        resumeData?.templateData ? (
          <>
            <ResumeTemplate id="templateContainer">
              {TemplateRender(templateId)}
            </ResumeTemplate>
            <Modal
              showModal={showJdModal}
              setShowModal={setShowJdModal}
            >
              <JdModal />
            </Modal>
          </>
        ) : (
          <LoaderWrapper>
            <Lottie animationData={animation} loop autoplay
              style={{
                width: '40%',
                opacity: 0.7
              }} />
            <DoYouKnowHeading>Do you know?</DoYouKnowHeading>
            <RandomResumeFact>
              {fact}
            </RandomResumeFact>
          </LoaderWrapper>
        )
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
    width: 210mm;
    flex-shrink: 0;
    flex-grow: 0;
    padding-top: 20px;
    margin-bottom: 120px;
    transition: all 0.2s ease-in-out;

    &.scaleup {
      scale: 1.2;
      transform: translateY(30px);
    }

    @media print {
      padding-top: 0;
    }

    @media (max-width: 576px) {
      width: 100%;
    }
  `;

const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;

    span {
      font-size: 13px;
      opacity: 0.7;
      font-weight: 500;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 7px 13px;

      img {
        height: 18px;
      }

      span {
        font-weight: 500;
        opacity: 1;
        font-size: 15px;
      }
    }
  `;

const DoYouKnowHeading = styled.h4`
`;

const RandomResumeFact = styled.span`
    font-size: 13px;
    font-weight: 500;
    opacity: 0.7;
    margin-top: 5px;
    display: block;
  `;

const ResumeTemplate = styled.div`
    margin-top: 20px;    
    padding-bottom: 100px;

    @media print {
      padding-bottom: 0;
    }
  `;

const LoaderWrapper = styled.div`
    background: #fff;
    border-radius: 10px;
    min-height: 500px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
`;


export default TemplateZone;
