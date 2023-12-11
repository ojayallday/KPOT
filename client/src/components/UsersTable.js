
import React from 'react';
import styled from 'styled-components';

// Styled components
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px; /* Adjust as needed */
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;
const EditButton = styled.button`
  margin-right: 5px;
  padding: 5px 10px;
  background-color: #4caf50; /* Green color,  */
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
const UsersTable = ({ users }) => {
    const handleEditClick = (userId) => {
      // To implement OnClick logic
      console.log(`Edit button clicked for user with ID: ${userId}`);
    };
  
    // Check if users is defined before mapping
    if (!users) {
      return <p>No users available</p>;
    }
  
    return (
      <StyledTable>
        <thead>
          <tr>
            <TableHeader>Email</TableHeader>
            <TableHeader>Hashed Password</TableHeader>
            <TableHeader>Reset Password for user</TableHeader>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.user_id}>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.password}</TableCell>
              <TableCell>
                <EditButton onClick={() => handleEditClick(user.user_id)}>
                  Reset Password
                </EditButton>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    );
  };
  
  export default UsersTable;
  