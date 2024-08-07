import React from 'react';
import styled from 'styled-components';
import {
  ContentSectionNames,
  Header,
  TemplateContent,
  TemplateZone
} from './components';
import { colors } from '@/helpers';
import { Modal } from '../common';

const Builder = ({
  userResumes,
  toggleResumesList,
  setToggleResumesList,
  isLoading,
  handleGeneratingResume,
  handlePreview, 
  togglePreview
}) => (
  <Wrapper onClick={handlePreview}>
    <Header />
    <EditorSection className={togglePreview ? 'overflow-hidden' : ''}>
      <ContentSectionNames />
      <TemplateZone />
      <TemplateContent />
    </EditorSection>
    <Modal
        showModal={toggleResumesList}
        setShowModal={setToggleResumesList}
      >
        <ResumesListWrapper>
          <SectionTitle>Select resume to start with...</SectionTitle>
          <ResumeList>
            {
              userResumes.map((resume, idx) => (
                <ResumeNameItem 
                  key={resume._id}
                  onClick={() => handleGeneratingResume(idx)}
                >
                  {resume.name}
                </ResumeNameItem>
              ))
            }
          </ResumeList>
        </ResumesListWrapper>
      </Modal>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
  height: 100vh;

  @media print {
    padding: 0;
    display: block;
  }
`;

const EditorSection = styled.div`
  display: flex;
  gap: 30px;
  overflow: auto;
  justify-content: space-between;
  flex: 1;

  &.overflow-hidden {
    overflow-x: hidden;
  }

  @media print {
    height: unset;
  }
`;

const ResumesListWrapper = styled.div`
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
`;

const SectionTitle = styled.h4`
    font-size: 14px;
    color: ${colors.ErrieBlack};
    padding: 10px 50px 10px 10px;
`;

const ResumeList = styled.div`
    max-height: 350px;
    overflow: auto;
`;

const ResumeNameItem = styled.div`
    padding: 10px 15px;
    border: 1px solid ${colors.GhostWhite};
    cursor: pointer;

    &:hover {
      background: ${colors.GhostWhite};
    }
`;

export default Builder;
