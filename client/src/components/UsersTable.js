// UserTable.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchUsersInfo } from '../api/auth';
import Layout from './layout';

// Styled components
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await fetchUsersInfo();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Layout>
    <StyledTable>
      <thead>
        <tr>
          <TableHeader>Email</TableHeader>
          <TableHeader>Hashed Password</TableHeader>
          {/* Add more table headers for other fields */}
        </tr>
      </thead>
      <tbody>
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user) => (
            <tr key={user._id}>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.hashedPassword}</TableCell>
              {/* Add more table cells for other fields */}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="2">No users found</td>
          </tr>
        )}
      </tbody>
    </StyledTable>
    </Layout>
  );
};

export default UsersTable;
