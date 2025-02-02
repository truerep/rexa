import { colors } from '@/helpers';
import React from 'react'

import styled from 'styled-components'
import { Button } from '../common/UiElements';


const UsersList = ({ usersData, totalCount, totalPages, currentPage, handlePageChange }) => {
  return (
    usersData.length && <Wrapper>
      <UsersWrapper>
        <Table>
          <Thead>
            <Tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Joined On</th>
            </Tr>
          </Thead>
          <Tbody>
            {usersData.map((u) => (
              <Tr key={u._id}>
                <Td>{u.firstName} {u.lastName}</Td>
                <Td>{u.email}</Td>
                <Td>
                  <p style={{ backgroundColor: u.role.toUpperCase() === 'ADMIN' ? 'red' : 'green', color: 'white', padding: '5px', borderRadius: '5px' }}>
                    {u.role.toUpperCase() === 'ADMIN' ? 'Admin' : 'User'}
                  </p>
                </Td>
                <Td>{new Date(u.createdAt).toDateString()}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Td colSpan="4">Total Users: {totalCount}</Td>
            </Tr>
            <Tr>
              <Td colSpan="4">Page {currentPage} of {totalPages}</Td>
            </Tr>
          </Tfoot>
        </Table>
        <Horizantal>
          <Button style={{
            backgroundColor: currentPage === 1 ? 'gray' : colors.HanPurple,
            color: 'white',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
          }} onClick={() => handlePageChange(currentPage - 1)}>Previous</Button>
          <Button style={{
            backgroundColor: currentPage === totalPages ? 'gray' : colors.HanPurple,
            color: 'white',
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
          }} onClick={() => handlePageChange(currentPage + 1)}>Next</Button>
        </Horizantal>
      </UsersWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`;

const UsersWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2vh 0;
`;

const Table = styled.table`
    table-layout: fixed;
    width: 80vw;
    border-collapse: collapse;
`;

const Thead = styled.thead`
    background-color: #f2f2f2;

    th {
      height: 6vh;
      background-color: ${colors.HanPurple};
      color: white;
      border: 1px solid #ddd;
    }

    th:first-child {
        width: 30%;
    }

    th:nth-child(2) {
        width: 50%;
    }

    th:nth-child(3) {
        width: 20%;
    }

    th:nth-child(4) {
        width: 40%;
    }
`;

const Tbody = styled.tbody`
    overflow-y: auto;
    height: 50vh;
`;

const Td = styled.td`
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
    width: 100%;

    @media (max-width: 768px) {
        font-size: 12px;
        text-align: left;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;

const Tr = styled.tr`
    background-color: #f2f2f2;
`;

const Tfoot = styled.tfoot` 
    background-color: #f2f2f2;
    color: white;

    tr {
        background-color: ${colors.Lavender};
    }
`;

const Horizantal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
`;

export default UsersList