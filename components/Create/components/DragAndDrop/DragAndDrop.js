import React from 'react';
import styled from 'styled-components';
import {
  InfoLine
} from '@/components/common/UiElements';
import {
  colors
} from '@/helpers';

const DragAndDrop = ({
  dragging,
  file,
  handleDragEnter,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  handleFileChange,
  removeFile,
  handleResumeUpload
}) => (
  <Wrapper>
    <InfoLine>
      Upload your existing resume to modify design and
      you can also match it with the job description
    </InfoLine>
    {
      !file ? (
        <ResumeUploadLabelContainer
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{
            border: dragging ? `2px dashed ${colors.HanPurple}` : '2px dashed #ccc'
          }}
        >
          <FileUpoadContainer>
            <FileIcon src="/assets/icons/file-icon.png" />
            <Text>Drag and Drop</Text>
            <Text className="or-text">Or</Text>
            <BrowseFileBtn className="btn-primary btn-outlined">
              <input type="file" onChange={handleFileChange} />
              Select File
            </BrowseFileBtn>
          </FileUpoadContainer>
        </ResumeUploadLabelContainer>
      ) : (
        <ResumeUploadContainer
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{
            border: dragging ? `2px dashed ${colors.HanPurple}` : '2px dashed #ccc'
          }}
        >
          <FileUpoadContainer>
            <FileIcon src="/assets/icons/file-icon.png" />
            {
          file ? (
            <Text className="file-name">{file?.name}</Text>
          ) : (
            <>
              <Text>Drag and Drop</Text>
              <Text className="or-text">Or</Text>
            </>
          )
        }
            {
          file ? (
            <BrowseFileBtn
              onClick={removeFile}
              className="btn-primary btn-outlined"
            >
              Remove
            </BrowseFileBtn>
          ) : (
            ''
          )
        }
            {
          !file ? (
            <BrowseFileBtn className="btn-primary btn-outlined">
              <input type="file" onChange={handleFileChange} />
              Select File
            </BrowseFileBtn>
          ) : ('')
        }
          </FileUpoadContainer>
        </ResumeUploadContainer>
      )
    }
    {/* <ResumeUploadContainer
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        border: dragging ? `2px dashed ${colors.HanPurple}` : '2px dashed #ccc'
      }}
    >
      <FileUpoadContainer>
        <FileIcon src="/assets/icons/file-icon.png" />
        {
          file ? (
            <Text className="file-name">{file?.name}</Text>
          ) : (
            <>
              <Text>Drag and Drop</Text>
              <Text className="or-text">Or</Text>
            </>
          )
        }
        {
          file ? (
            <BrowseFileBtn
              onClick={removeFile}
              className="btn-primary btn-outlined"
            >
              Remove
            </BrowseFileBtn>
          ) : (
            ''
          )
        }
        {
          !file ? (
            <BrowseFileBtn className="btn-primary btn-outlined">
              <input type="file" onChange={handleFileChange} />
              Select File
            </BrowseFileBtn>
          ) : ('')
        }
      </FileUpoadContainer>
    </ResumeUploadContainer> */}
    {
      file ? (
        <GenerateButtonWrapper>
          <GenerateBtn
            className="btn-primary btn-dark"
            type="button"
            onClick={() => handleResumeUpload(file)}
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

const ResumeUploadContainer = styled.div`
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  margin-top: 15px;
`;

const ResumeUploadLabelContainer = styled.label`
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  margin-top: 15px;
  display: block;

  &:hover {
    border-color: ${colors.HanPurple}!important;
    cursor: pointer;
  }
`;

const FileUpoadContainer = styled.div`

`;

const FileIcon = styled.img`
    margin-bottom: 15px;
    transform: translateX(15px);
`;

const Text = styled.p`
    color: ${colors.Lavender};
    font-size: 20px;

    &.or-text {
      font-size: 16px;
      color: ${colors.Gray};
      padding: 10px 0;
    }

    &.file-name {
      margin-bottom: 15px;
    }
`;

const BrowseFileBtn = styled.label`
    display: inline-block;
    cursor: pointer;

    input {
      display: none;
    }
`;

const GenerateButtonWrapper = styled.div`
    padding-top: 20px;
    text-align: right;
`;

const GenerateBtn = styled.button`
    font-size: 18px;
`;

export default DragAndDrop;
