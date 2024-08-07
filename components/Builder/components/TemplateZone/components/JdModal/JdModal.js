import React from 'react';
import styled from 'styled-components';
import {
  colors
} from '@/helpers';

const JdModal = ({
  redirectToCreateResumePage,
  isLoading,
  jobDescription,
  setJobDescription,
  ref,
  modifyResume,
  resumeData
}) => (
  <Wrapper>
    <TextArea
      value={jobDescription}
      onChange={(e) => setJobDescription(e.target.value)}
      placeholder="Enter job description || Copy paste"
      ref={ref}
    />
    <Actions>
      {!resumeData?.resumeString && (
        <button
          type="button"
          onClick={redirectToCreateResumePage}
          className="btn-primary"
        >
          Create Resume
        </button>
      )}
      <button
        disabled={isLoading}
        type="button"
        onClick={modifyResume}
        className={`${isLoading || jobDescription.length < 1 ? 'disabled' : ''} btn-primary`}
      >
        Update Resume
      </button>
    </Actions>
  </Wrapper>
);

const Wrapper = styled.div`
    min-width: 450px;
    padding: 20px;
    border-radius: 10px;
    background: #fff;
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 5px 8px;
    box-sizing: border-box;
    resize: none;
    min-height: 200px;
    outline: 0;
    border-radius: 4px;
    font-size: 16px;
    border: 1px solid #cbcbcb;

    &:active {
        border-color: ${colors.HanPurple};
    }
`;

const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    text-align: right;

    button.disabled {
      pointer-events: none;
      opacity: 0.6;
    }
`;

export default JdModal;
