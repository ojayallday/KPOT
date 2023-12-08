
import React from 'react';

const ProjectsTable = ({ projects }) => {
  return (
    <table>
      <thead>
        <tr>
            <th>Project Description</th>
            <th>PO</th>
            <th>Region</th>
            <th>Rollout Partner</th>
            <th>MSP</th>
            <th>Assigned Engineer</th>
            <th>Project Status</th>
            <th>OAC Date</th>
            <th>FAC Date</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
      </thead>
      <tbody>

        {projects.map((project) => (
            <tr key={project.id}>
            <td>{project.project_desc}</td>
            <td>{project.po}</td>
            <td>{project.region}</td>
            <td>{project.partner}</td>
            <td>{project.msp}</td>
            <td>{project.assigned_engineer}</td>
            <td>{project.open_status}</td>
            <td>{project.oac_date}</td>
            <td>{project.fac_date}</td>

    
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectsTable;