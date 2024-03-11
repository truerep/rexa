import React from 'react';
import styled from 'styled-components';

import {
  colors
} from '@/helpers';
import {
  DragAndDrop
} from './components';

const Create = ({handleResumeUpload}) => (
  <Wrapper>
    <Logo src="/assets/images/company-logo.svg" />
    <Container>
      {/* <Title>Provide Resume</Title> */}
      <DragAndDrop handleResumeUpload={handleResumeUpload} />
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
    padding: 50px 20px;
    text-align: center;
`;

const Logo = styled.img`
    height: 120px;
`;

const Container = styled.div`
    border-radius: 20px;
    background: #fff;
    max-width: 700px;
    margin: 60px auto 10px;
    padding: 30px;
    text-align: left;
`;

const Title = styled.h1`
    font-weight: 500;
    color: ${colors.ErrieBlack};
    font-size: 36px;
`;

export default Create;
