import React from 'react';
import {
  Header, ResumeTable
} from './components';
import { Breadcrumbs } from '../common';
import styled from 'styled-components';

const Dashboard = ({breadcrumbs}) => (
  <>
    <Header />
    <Wrapper>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <ResumeTable />
    </Wrapper>
  </>
);

const Wrapper = styled.div`    
  max-width: 1200px;
  margin: 60px auto 0;

  @media (max-width: 1240px) {
    margin: 30px 20px 0;
  }
`;

export default Dashboard;
