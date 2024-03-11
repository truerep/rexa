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
            <Actions>
              <span>Match your resume with Job Description and make it ATS Friendly.</span>
              <button onClick={() => setShowJdModal(true)} type="button" className="btn-primary btn-outlined">
                Match now
              </button>
              <button type="button" onClick={() => window.print()} className="btn-primary">
                Download
              </button>
            </Actions>
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
          'Loading...'
        )
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
    width: 210mm;
    flex-shrink: 0;
  
    img {
      width: 30px;
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
  `;

const ResumeTemplate = styled.div`
    margin-top: 20px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
  `;

export default TemplateZone;
