import React from 'react';
import styled from 'styled-components';
import {
  colors
} from '@/helpers';

const JdModal = ({
  isLoading,
  jobDescription,
  setJobDescription,
  modifyResume
}) => (
  <Wrapper>
    <TextArea
      value={jobDescription}
      onChange={(e) => setJobDescription(e.target.value)}
      placeholder="Enter job description || Copy paste"
    />
    <Actions>
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

    @media (max-width: 768px) {
      min-width: 370px;
    }

    @media (max-width: 576px) {
      min-width: 270px;
    }
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
    padding-top: 20px;
    text-align: right;

    button.disabled {
      pointer-events: none;
      opacity: 0.6;
    }
`;

export default JdModal;
