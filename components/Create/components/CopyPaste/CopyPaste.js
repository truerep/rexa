import React from 'react';
import styled from 'styled-components';
import {
  InfoLine
} from '@/components/common/UiElements';

const CopyPaste = ({
  resumeText,
  setResumeText,
  handleText,
  ref
}) => (
  <Wrapper>
    <InfoLine>
      You can copy and paste the text from your existing resume... we'll take care the rest!
    </InfoLine>
    <TextAreaWrapper>
      <textarea
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        placeholder="Paste resume text..."
        ref={ref}
      />
    </TextAreaWrapper>
    {
      resumeText ? (
        <GenerateButtonWrapper>
          <GenerateBtn
            className="btn-primary btn-dark"
            type="button"
            onClick={handleText}
          >
            Generate
          </GenerateBtn>
        </GenerateButtonWrapper>
      ) : ('')
    }
  </Wrapper>
);

const Wrapper = styled.div`

`;

const TextAreaWrapper = styled.div`
    margin-top: 15px;

    textarea {
      width: 100%;
      padding: 10px;
      resize: none;
      height: 200px;
      border-radius: 5px;
      border: 1px solid #ccc;
      outline: 0;
      font-family: inherit;
      font-size: 15px;
    }
`;

const GenerateButtonWrapper = styled.div`
    padding-top: 20px;
    text-align: right;
`;

const GenerateBtn = styled.button`
    font-size: 18px;
`;

export default CopyPaste;
