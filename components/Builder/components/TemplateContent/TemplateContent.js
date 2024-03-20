import React from 'react';
import styled from 'styled-components';
import {
  BasicInfo,
  Education,
  Experience,
  Skills
} from './components';

const TemplateContent = () => (
  <Wrapper className="print-none">
    <BasicInfo />
    <Skills />
    <Experience />
    <Education />
  </Wrapper>
);

const Wrapper = styled.div`
    background-color: #fff;
    flex: 1;
    border-radius: 10px;
`;

export default TemplateContent;
