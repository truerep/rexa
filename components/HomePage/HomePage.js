import React from 'react'
import styled from 'styled-components';
import { HeroSection } from './components';
import { Header } from '../common';

const HomePage = () => {
  return (
    <Wrapper>
        <HeaderWrapper>
            <Header />
        </HeaderWrapper>
        <HeroSection />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    height: 100vh;
    background-image: linear-gradient(-45deg, rgba(85, 3, 251, 0.1) -9.44%, rgba(254, 168, 2, 0.1) 99.42%);
`;

const HeaderWrapper = styled.div`
`;

export default HomePage