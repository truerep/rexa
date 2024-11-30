import React from 'react'
import styled from 'styled-components';
import { SideBar } from './components';
import { Loader } from '@/components';
import { colors } from '@/helpers';
import AdminContextProvider from './context/AdminContext';
import PageHeader from './components/common/PageHeader';

const AdminPanel = ({ children, pageLoading, isAuthorized, handleLogin, title }) => {
    return (
        <AdminContextProvider>
            <Section>
                {
                    pageLoading ? (
                        <LoaderWrapper>
                            <Loader />
                        </LoaderWrapper>
                    ) : (
                        <>
                            {
                                isAuthorized ? (
                                    <Wrapper>
                                        <PageHeader title={title} />
                                        <VerticalFlex>
                                            <SideBar />
                                            <PageContent>{children}</PageContent>
                                        </VerticalFlex>
                                    </Wrapper>
                                ) : (
                                    <LoaderWrapper>
                                        <LoginButton onClick={handleLogin}>
                                            <span>Login</span>
                                        </LoginButton>
                                    </LoaderWrapper>
                                )
                            }
                        </>
                    )
                }
            </Section>
        </AdminContextProvider>
    )
}

const Section = styled.section`
    padding: 20px;
    height: 100vh;
    overflow: auto;
`;

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 20px;
`;

const VerticalFlex = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`;

const PageContent = styled.div`
    flex: 1;
    overflow: auto;
`;

const LoginButton = styled.button`
  padding: 10px 30px;
  background-color: ${colors.HanPurple};
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
`;

export default AdminPanel