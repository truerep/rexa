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

const TemplateZone = ({
  showJdModal,
  setShowJdModal
}) => {
  const [templateId, setTemplateId] = useState();
  const {resumeData} = useContext(ResumeContext);

  useEffect(() => {
    setTemplateId(resumeData.templateId);
  }, [resumeData]);

  return (
    <Wrapper>
      {
        resumeData?.templateData ? (
          <>
            {/* <Actions className="print-none">
              <span>Match your resume with Job Description and make it ATS Friendly.</span>
              <button onClick={() => setShowJdModal(true)} type="button" className="btn-primary btn-outlined">
                <img src="/assets/icons/sync-icon.png" alt="" />
                <span>Match now</span>
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="btn-primary"
              >
                <img src="/assets/icons/download-icon.png" alt="" />
                <span>Download</span>
              </button>
            </Actions> */}
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
          <Loader>
            <LoaderImg src="https://cdn.dribbble.com/users/171267/screenshots/2454901/fileloading.gif" alt="loading..." />
          </Loader>
        )
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
    width: 210mm;
    flex-shrink: 0;
    padding-top: 20px;
    margin-bottom: 120px;

    @media print {
      padding-top: 0;
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

const ResumeTemplate = styled.div`
    margin-top: 20px;    
    padding-bottom: 100px;

    @media print {
      padding-bottom: 0;
    }
  `;

const Loader = styled.div`
    background: #fff;
    border-radius: 10px;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoaderImg = styled.img`
  width: 60%;
`;

export default TemplateZone;
