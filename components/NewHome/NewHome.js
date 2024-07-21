import React, { useState } from 'react'
import styled from 'styled-components';
import { Header } from '../common';
import { HeroSection, WhyChooseUs, Features, FAQs } from './components';

const NewHome = () => {
  const [toggleCreate, setToggleCreate] = useState(false);

  return (
    <Wrapper>
      {!toggleCreate &&
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
      }
      <HeroSection toggleCreate={toggleCreate} setToggleCreate={setToggleCreate} />
      <WhyChooseUs />
      <Features />
      <FAQs />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    min-height: 100vh;
    background: #fff;
    // background-image: linear-gradient(-45deg, rgba(85, 3, 251, 0.1) -9.44%, rgba(254, 168, 2, 0.1) 99.42%);
`;

const HeaderWrapper = styled.div`
`;

export default NewHome