
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

const ProjectsTable = ({ projects }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
        <TableHeader>Project Description</TableHeader>
        <TableHeader>PO</TableHeader>
        <TableHeader>Region</TableHeader>
        <TableHeader>Partner</TableHeader>
        <TableHeader>MSP</TableHeader>
        <TableHeader>Assigned Engineer</TableHeader>
        <TableHeader>Project Status</TableHeader>
        <TableHeader>OAC Date</TableHeader>
        <TableHeader>FAC Date</TableHeader>
        <TableHeader>Edit</TableHeader>
        
        </tr>
      </thead>
      <tbody>

        {projects.map((project) => (
            <tr key={project.id}>
            <TableCell>{project.project_desc}</TableCell>
            <TableCell>{project.po}</TableCell>
            <TableCell>{project.region}</TableCell>
            <TableCell>{project.partner}</TableCell>
            <TableCell>{project.msp}</TableCell>
            <TableCell>{project.assigned_engineer}</TableCell>
            <TableCell>{project.open_status}</TableCell>
            <TableCell>{project.oac_date}</TableCell>
            <TableCell>{project.fac_date}</TableCell>
            <TableCell>{project.edit}</TableCell>
            
          </tr>
        ))}
      </tbody>
      </StyledTable>
  );
};

export default ProjectsTable;