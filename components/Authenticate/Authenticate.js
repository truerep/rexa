import React from 'react';
import styled from 'styled-components';
import {
  colors
} from '@/helpers';
import {
  Loader
} from '../common';

const Authenticate = ({handleLogin, isLoading}) => (
  <Wrapper>
    <LoginContent>
      {
        isLoading ? <Loading><Loader /></Loading> : ''
       }
      <Logo src="/assets/images/company-logo.svg" alt="logo" />
      <Title>Hello Again!</Title>
      <Tagline>Login or Signup to your account</Tagline>
      <GoogleLoginBtn onClick={handleLogin}>
        Sign in with Google
      </GoogleLoginBtn>
    </LoginContent>
  </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

const LoginContent = styled.div`
    width: 320px;
    padding: 20px;
    border-radius: 5px;
    background-color: #fff;
    position: relative;
    overflow: hidden;
`;

const Loading = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
`;

const Logo = styled.img`
    height: 75px;
    margin: 0 auto;
    display: block;
`;

const Title = styled.h1`
    font-size: 22px;
    font-weight: 600;
    margin: 20px 0 10px;
    text-align: center;
    font-family: "Martel"; 
`;

const Tagline = styled.p`
    font-size: 14px;
    text-align: center;
`;

const GoogleLoginBtn = styled.button`
    margin: 30px auto 20px;
    display: block;
    width: 100%;
    max-width: fit-content;
    text-align: left;
    font-size: 14px;
    transition: all 0.15s ease-in-out;
    padding: 12px 16px 12px 42px;
    border-radius: 3px;
    border: 1px solid transparent;
    box-shadow: -1px 4px 30px 0 rgba(5, 0, 255, 0.1);
    color: #757575;
    font-weight: 500;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
    background-color: white;
    background-repeat: no-repeat;
    background-position: 12px 12.5px;

    &:hover {
        box-shadow: -1px 4px 30px 0 rgba(5, 0, 255, 0.15);
        border-color: ${colors.HanPurple};
        transform: unset;
    }
`;

export default Authenticate;
