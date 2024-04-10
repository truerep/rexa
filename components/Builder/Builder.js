import React from 'react';
import styled from 'styled-components';
import {
  ContentSectionNames,
  Header,
  TemplateContent,
  TemplateZone
} from './components';

const Builder = () => (
  <Wrapper>
    <Header />
    <EditorSection>
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

  @media print {
    height: unset;
  }
`;

export default Builder;
