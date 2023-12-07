// Card.js
import React from 'react';

const ProjectsCard1 = ({ title, content }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', margin: '16px', maxWidth: '300px' }}>
      <h3>Project Summary</h3>
      <p>{content}</p>
    </div>
  );
};

export default ProjectsCard1;
