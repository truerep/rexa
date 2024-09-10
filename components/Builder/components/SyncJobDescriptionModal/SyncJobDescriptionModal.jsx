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
                <BrowseFileBtn className="btn-primary btn-outlined">
                    <input type="file" onChange={handleFileUpload} />
                    Upload Resume
                </BrowseFileBtn>
                {
                    userResumes.length > 0 ? (
                        <>
                            <OrText>OR</OrText>
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
                        </>
                    ) : ('')
                }

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
    /* width: 50rem;
    max-width: 100%;
    max-height: 100%;
    overflow-y: scroll; */
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
    top: 30px;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${colors.LightLavender};
    z-index: -2;
  }

  &:before {
    position: absolute;
    content: '';
    height: 100%;
    width: 40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    background: #fff;
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
    max-height: 250px;
    overflow: auto;
    text-align: left;
`;

const ResumeNameItem = styled.div`
    padding: 7px 15px;
    border: 1px solid ${colors.GhostWhite};
    cursor: pointer;

    &:hover {
      background: ${colors.GhostWhite};
    }
`;


export default SyncJobDescriptionModal