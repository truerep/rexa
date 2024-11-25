import React from 'react'

import styled from 'styled-components'


const UsersList = ({ usersData, totalCount, totalPages, currentPage }) => {
  return (
    <Wrapper>
      <UsersWrapper>
        <Table>
          <Caption>
            List of Users
          </Caption>
          <Thead>
            <Tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Joined On</th>
            </Tr>
          </Thead>
          <Tbody>
            {usersData.length > 0 ? usersData.map((u) => (
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
            )) : null}
          </Tbody>
          <tfoot>
            <Tr>
              <Td colSpan="4">Total Users: {totalCount}</Td>
            </Tr>
          </tfoot>
        </Table>
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
    margin-top: 20px;
`;

const Table = styled.table`
    table-layout: fixed;
    width: 90vw;
    border-collapse: collapse;
    border: 3px solid purple;
`;

const Caption = styled.caption`
    font-size: 1.5em;
    margin-bottom: 10px;
`;

const Thead = styled.thead`
    /* display: block;
    overflow-y: auto; */
    background-color: #f2f2f2;

    th {
      height: 6vh;
      background-color: #f2f2f2;
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
    /* display: block;*/
    overflow-y: auto;
    height: 500px; 
`;

const Td = styled.td`
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
    width: 100%;
`;

const Th = styled.th`
    padding: 10px;
    border: 1px solid #ddd;
`;

const Tr = styled.tr`
    background-color: #f2f2f2;
`;



export default UsersList