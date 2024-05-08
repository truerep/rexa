import React from 'react';
import styled from 'styled-components';
import {
  useRouter
} from 'next/router';

import {
  colors, getFormattedDate
} from '@/helpers';
import {
  Create,
  Loader
} from '@/components';
import {
  Modal,
  Popover
} from '@/components/common';

const ResumeTable = ({
  userResumes,
  handleDeleteResume,
  handleDuplicatingResume,
  isLoading,
  toggleCreate,
  setToggleCreate,
  toggleCreateOptions,
  setToggleCreateOptions,
  toggleResumesList,
  setToggleResumesList
}) => {
  const router = useRouter();

  return (
    <Wrapper>
      <Header>
        <Title>
          My Resume's
        </Title>
        <CreateResumeOptions>
          <Button onClick={() => {
            if (userResumes.length > 0) {
              setToggleCreateOptions(!toggleCreateOptions)
            } else {
              setToggleCreate(true)
            }}} 
            className="btn-primary btn-outlined">
            <img src="/assets/icons/plus-icon-purple.svg" alt="create-new" />
            <span>Create New</span>
          </Button>
          <Dropdown className={toggleCreateOptions ? 'active' : ''}>
            <button onClick={() => {setToggleCreateOptions(false);setToggleCreate(true);}}>Start New</button>
            <button onClick={() => {setToggleCreateOptions(false);setToggleResumesList(true);}}>Copy Existing</button>
          </Dropdown>
        </CreateResumeOptions>
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
              <th>Files</th>
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
                  <span className="faded-text">
                    {
                      getFormattedDate(resume?.updatedAt)
                    }
                  </span>
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
          <Button onClick={() => setToggleCreate(true)} className="btn-primary btn-outlined">
            <img src="/assets/icons/plus-icon-purple.svg" alt="create-new" />
          </Button>
        </EmptyData>
      ) : ('')}
      <Popover
        showModal={toggleCreate}
        setShowModal={setToggleCreate}
        haveMarginTop
      >
        <Create />
      </Popover>
      <Modal
        showModal={toggleResumesList}
        setShowModal={setToggleResumesList}
      >
        <ResumesListWrapper>
          <SectionTitle>Select resume to start with...</SectionTitle>
          <ResumeList>
            {
              userResumes.map((resume) => (
                <ResumeNameItem 
                  key={resume._id}
                  onClick={() => handleDuplicatingResume(resume._id)}
                >
                  {resume.name}
                </ResumeNameItem>
              ))
            }
          </ResumeList>
        </ResumesListWrapper>
      </Modal>
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
    // table-layout: fixed;
    
    th, td {
      padding: 13px 33px;
      text-align: left;
      font-weight: 400;

      @media (min-width: 1240px) {
        &:last-child {
          max-width: 155px;
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

    .faded-text {
      opacity: 0.7;
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

const CreateResumeOptions = styled.div`
    position: relative;
`;

const Dropdown = styled.div`
    position: absolute;
    top: calc(100% + 20px);
    right: 0;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 4px 30px 0 rgba(5, 0, 255, 0.05);
    transition: all 0.15s ease-in-out;
    transform: translateY(15px);
    opacity: 0;
    padding: 10px 0;
    pointer-events: none;

    &.active {
      transform: unset;
      opacity: 1;
      pointer-events: all;
    }

    button {
      padding: 10px 15px;
      display: block;
      width: 100%;
      text-align: left;
      transform: unset;
      font-weight: 500;
      min-width: 150px;

      &:hover {
        background: ${colors.GhostWhite};
      }
    }
`;

const ResumesListWrapper = styled.div`
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
`;

const SectionTitle = styled.h4`
    font-size: 14px;
    color: ${colors.ErrieBlack};
    padding: 10px 50px 10px 10px;
`;

const ResumeList = styled.div`
    max-height: 350px;
    overflow: auto;
`;

const ResumeNameItem = styled.div`
    padding: 10px 15px;
    border: 1px solid ${colors.GhostWhite};
    cursor: pointer;

    &:hover {
      background: ${colors.GhostWhite};
    }
`;

export default ResumeTable;
