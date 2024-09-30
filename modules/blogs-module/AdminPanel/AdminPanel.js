import React from 'react'
import styled from 'styled-components';
import { SideBar } from './components';

const AdminPanel = ({children}) => {
  return (
    <Section>
        <Wrapper>
            <SideBar />
            <PageContent>{children}</PageContent>
        </Wrapper>
    </Section>
  )
}

const Section = styled.section`
    padding: 20px;
    height: 100vh;
    overflow: auto;
`;

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    gap: 20px;
`;

const PageContent = styled.div`
    flex: 1;
    overflow: auto;
`;

export default AdminPanel