import React from 'react';
import styled from 'styled-components';
import {
  ContentSectionNames,
  Header,
  TemplateContent,
  TemplateZone
} from './components';

const Builder = ({handlePreview, togglePreview}) => (
  <Wrapper onClick={handlePreview}>
    <Header />
    <EditorSection className={togglePreview ? 'overflow-hidden' : ''}>
      <ContentSectionNames />
      <TemplateZone />
      <TemplateContent />
    </EditorSection>
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

export default Builder;
