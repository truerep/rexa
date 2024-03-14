import React from 'react';
import styled from 'styled-components';
import {
  TemplateContent,
  TemplateZone,
  TemplatesSidebar
} from './components';
import ResumeContextProvider from '@/context/ResumeContext';

const Builder = () => (
  <ResumeContextProvider>
    <Wrapper>
      <EditorSection>
        <TemplatesSidebar />
        <TemplateZone />
        <TemplateContent />
      </EditorSection>
    </Wrapper>
  </ResumeContextProvider>
);

const Wrapper = styled.div`
  padding: 20px;

  @media print {
    padding: 0;
  }
`;

const EditorSection = styled.div`
  display: flex;
  gap: 30px;
`;

export default Builder;
