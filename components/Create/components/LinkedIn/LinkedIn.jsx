import React from 'react';
import styled from 'styled-components';
import {
  InfoLine
} from '@/components/common/UiElements';

const LinkedIn = ({
  handleLogin
}) => (
  <Wrapper>
    <InfoLine>
      Please Login to your LinkedIn account, we will fetch your resume text.
    </InfoLine>
    <LinkedInButtonWrapper>
      <LinkedInSigninButton
        type="button"
        onClick={handleLogin}
      >
        Sign In to LinkedIn
        <img src="/assets/icons/linkedin.png" alt="linkedin" width="40" />
      </LinkedInSigninButton>
    </LinkedInButtonWrapper>
  </Wrapper>
);

const Wrapper = styled.div`

`;

const LinkedInButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    height: 200px;
    align-items: center;
    width: 100%;
    padding: 10px;
    resize: none;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: 0;
    font-family: inherit;
    font-size: 15px;
`;

const LinkedInSigninButton = styled.button`
    font-size: 18px;
    background-color: #0077b5;
    color: #fff;
    padding: 10px 25px;
    border-radius: 5px;
    border: 1px solid #0077b5;
    display: flex;
    align-items: center;
    gap: 10px;
    :hover {
        background-color: #fff;
        color: #0077b5;
        img {
          transition: all 1s ease-in-out;
          transform: rotate(360deg) scale(1.1) translateX(2px);
        }
    }
`;

export default LinkedIn;
