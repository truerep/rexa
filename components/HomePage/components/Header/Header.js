import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>Header</Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export default Header