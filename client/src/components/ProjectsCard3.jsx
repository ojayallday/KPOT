// Card.js
import React from 'react';

const ProjectsCard3 = ({ title, content }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', margin: '16px', maxWidth: '300px' }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default ProjectsCard3;
