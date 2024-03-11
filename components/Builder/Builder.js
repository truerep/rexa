import React from 'react';
import styled from 'styled-components';
import {
  TemplateZone, TemplatesSidebar
} from './components';
import ResumeContextProvider from '@/context/ResumeContext';

const Builder = () => (
  <ResumeContextProvider>
    <Wrapper>
      <EditorSection>
        <TemplatesSidebar />
        <TemplateZone />
      </EditorSection>
    </Wrapper>
  </ResumeContextProvider>
);

const Wrapper = styled.div`
  padding: 20px;
`;

const EditorSection = styled.div`
  display: flex;
  gap: 30px;
`;

export default Builder;
