import React from 'react';
import styled from 'styled-components';
import {
  BasicInfo, Experience, Skills
} from './components';

const TemplateContent = () => (
  <Wrapper className="print-none">
    <BasicInfo />
    <Skills />
    <Experience />
  </Wrapper>
);

const Wrapper = styled.div`
    background-color: #fff;
    flex: 1;
    border-radius: 10px;
    padding: 15px;
`;

export default TemplateContent;
