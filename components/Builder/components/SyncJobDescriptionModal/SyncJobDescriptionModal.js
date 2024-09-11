import React from 'react';

import styled from 'styled-components';

import { Modal } from '@/components/common';

import { colors } from '@/helpers';

const SyncJobDescriptionModal = ({
    toggleResumesList,
    setToggleResumesList,
    userResumes,
    handleFileUpload,
    handleGeneratingResume,
    isLoading
}) => {

    return (
        <Modal
            showModal={toggleResumesList}
            setShowModal={setToggleResumesList}
            showCloseButton={false}
        >
            <ResumesListWrapper>
                <LeftSection>
                    <BrowseFileBtn className="btn-primary btn-outlined">
                        <input type="file" onChange={handleFileUpload} />
                        Upload Resume
                    </BrowseFileBtn>
                </LeftSection>
                <OrText>OR</OrText>
                <RightSection>
                    {
                        userResumes.length > 0 ? (
                            <>
                                <SectionTitle>
                                    Select a resume
                                </SectionTitle>
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
                            </>
                        ) : (
                            <NoResumeText>No resumes found. Please upload a resume to proceed.</NoResumeText>
                        )
                    }
                </RightSection>

            </ResumesListWrapper>
        </Modal>
    )
}



const ResumesListWrapper = styled.div`
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding: 50px 30px 30px;
    text-align: center;
    width: 50rem;
    max-width: 100%;
    height: 35rem;
    max-height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const LeftSection = styled.div`
    width: 50%;
    padding: 0 20px;
`;

const RightSection = styled.div`
    width: 50%;
    padding: 0 20px;
`;

const BrowseFileBtn = styled.label`
        display: inline-block;
        cursor: pointer;
    
        input {
          display: none;
        }
`;

const OrText = styled.p`
  padding: 20px 0 10px;
  position: relative;
  z-index: 1;
  font-weight: 500;

  &:after {
    content: '';
    position: absolute;
    top: 4rem;
    left: 10px;
    width: 1%;
    height: 10rem;
    background: ${colors.GraniteGray};
    z-index: -2;
  }

  &:before {
    content: '';
    position: absolute;
    top: -10rem;
    left: 10px;
    width: 1%;
    height: 10rem;
    background: ${colors.GraniteGray};
    z-index: -1;
  }
`;

const SectionTitle = styled.h4`
    font-size: 22px;
    color: ${colors.ErrieBlack};
    padding: 10px 50px 10px 10px;
    font-weight: 500;
`;

const ResumeList = styled.div`
    max-height: 25rem;
    overflow: auto;
    text-align: left;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${colors.Gray};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: ${colors.Quartz};
    }
    ::-webkit-scrollbar-track {
        background: ${colors.GhostWhite};
    }
    ::-webkit-scrollbar-track:hover {
        background: ${colors.GhostWhite};
    }
`;

const ResumeNameItem = styled.div`
    padding: 7px 15px;
    border: 1px solid ${colors.GhostWhite};
    cursor: pointer;

    &:hover {
      background: ${colors.GhostWhite};
    }
`;

const NoResumeText = styled.p`
    font-size: 16px;
    color: ${colors.ErrieBlack};
    padding: 10px 0;
`;


export default SyncJobDescriptionModal