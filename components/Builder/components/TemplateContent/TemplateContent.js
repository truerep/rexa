import React from 'react';
import styled from 'styled-components';
import {
  BasicInfo
} from './components';

const TemplateContent = ({templateData}) => (
  <Wrapper className="print-none">
    <BasicInfo />
  </Wrapper>
);

const Wrapper = styled.div`
    background-color: #fff;
    flex: 1;
    border-radius: 10px;
    padding: 15px;
`;

export default TemplateContent;
