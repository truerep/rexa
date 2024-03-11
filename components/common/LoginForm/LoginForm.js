import React from 'react';
import styled from 'styled-components';
import {
  colors
} from '@/helpers';

const LoginForm = () => (
  <LoginWrapper>
    <Form>
      <form className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className="btn-primary">login</button>
        <p className="message">
          Not registered?
          <a href="#"> Create an account</a>
        </p>
      </form>
    </Form>
  </LoginWrapper>
);

const LoginWrapper = styled.div` 
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
  `;

const Form = styled.div`
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    border-radius: 10px;

    
  input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f6f4fa;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 5px;
  }
   button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: ${colors.HanPurple};
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }
  .message a {
    color: ${colors.HanPurple};
    text-decoration: none;
  }
  .register-form {
    display: none;
  }
`;

export default LoginForm;
