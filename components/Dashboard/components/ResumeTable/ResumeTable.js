import React from 'react';
import styled from 'styled-components';
import {
  useRouter
} from 'next/router';

import {
  colors
} from '@/helpers';
import {
  Loader
} from '@/components';

const ResumeTable = ({userResumes, handleDeleteResume, isLoading}) => {
  const router = useRouter();

  return (
    <Wrapper>
      <Header>
        <Title>
          My Resume's
        </Title>
        <Button onClick={() => router.push('/create')} className="btn-primary btn-outlined">
          <img src="/assets/icons/plus-icon-purple.svg" alt="create-new" />
          <span>Create New</span>
        </Button>
      </Header>
      {
        isLoading ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : ('')
      }
      {!isLoading && userResumes.length > 0 ? (
        <Table cellSpacing={0}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Updated</th>
              <th>Views</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userResumes.map((resume) => (
              <tr key={resume?._id}>
                <td>
                  <a
                    onClick={() => router.push(`/builder/${resume?._id}`)}
                  >
                    {resume?.name}
                  </a>
                </td>
                <td>
                  -
                </td>
                <td>
                  -
                </td>
                <td>
                  <ActionsWrapper>
                    <Button
                      onClick={() => router.push(`/builder/${resume?._id}`)}
                      className="btn-primary btn-outlined"
                    >
                      <img src="/assets/icons/edit-icon-dark.svg" alt="edit" />
                      <span>Edit</span>
                    </Button>
                    <Button onClick={() => handleDeleteResume(resume?._id)} className="btn-primary btn-outlined red">
                      <img src="/assets/icons/delete-icon-red.svg" alt="delete" />
                      <span>Delete</span>
                    </Button>
                  </ActionsWrapper>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : ('')}
      {!isLoading && userResumes.length === 0 ? (
        <EmptyData>
          <p>
            No resume found... Create a new one!
          </p>
          <Button onClick={() => router.push('/create')} className="btn-primary btn-outlined">
            <img src="/assets/icons/plus-icon-purple.svg" alt="create-new" />
          </Button>
        </EmptyData>
      ) : ('')}
    </Wrapper>
  );
};

const Wrapper = styled.div`
    max-width: 1200px;
    margin: 100px auto 50px;
    border-radius: 10px;
    box-shadow: 0 4px 30px 0 rgba(5, 0, 255, 0.05);
    background: #fff;
    padding-bottom: 50px;
    min-height: 450px;

    @media (max-width: 1240px) {
      margin-left: 20px;
      margin-right: 20px;
    }
`;

const LoaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 90px 0 0;
`;

const EmptyData = styled.div`
    font-size: 16px;
    text-align: center;
    padding-top: 100px;

    button {
      margin: 20px auto 0;
    }
`;

const Header = styled.div`
    padding: 33px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    gap: 14px;

    img {
      height: 12px;
    }
`;

const Table = styled.table`
    width: 100%;
    
    th, td {
      padding: 13px 33px;
      text-align: left;
      font-weight: 400;

      @media (min-width: 1240px) {
        &:last-child {
          max-width: 133px;
        }
      }
    }

    th {
      background-color: ${colors.GhostWhite};
      color: ${colors.GraniteGray};
      font-size: 16px;
    }

    td {
      font-size: 14px;
      border-bottom: 1px solid ${colors.LavenderWeb};

      a {
        cursor: pointer;
      }
    }
`;

const ActionsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    font-size: 12px;

    button {
      padding: 5px 15px;
      border-radius: 5px;
      gap: 11px;

      &.red {
        color: ${colors.Red};
        border-color: ${colors.Red};
      }
    }

    img {
      height: 12px;
    }
`;

export default ResumeTable;
