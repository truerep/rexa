import React from 'react';
import styled from 'styled-components';
import {
  InfoLine
} from '@/components/common/UiElements';
import {
  colors
} from '@/helpers';

const CreateNew = ({ handleRedirectionToBuilder }) => (
  <Wrapper>
    <InfoLine>
      You you will be redirected to the resume builder with dummy data and you can edit it as per your need.
    </InfoLine>
    <Container>
      <Button onClick={handleRedirectionToBuilder}>Create New Resume</Button>
    </Container>

  </Wrapper>
);

const Wrapper = styled.div`

`;

const Container = styled.div`
  padding: 20px;
  border-radius: 5px;
  margin-top: 15px;
  background: ${colors.GhostWhite};
  border: 1px solid ${colors.LightLavender};
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  transform: unset!important;
  background: #fff;
  color: ${colors.HanPurple};
  font-size: 16px;
  border: 1px solid ${colors.HanPurple};
  display: flex;
  align-items: center;
  margin: 0 auto;
  gap: 10px;
  padding: 18px 30px;
  border-radius: 5px;
`;



export default CreateNew;
