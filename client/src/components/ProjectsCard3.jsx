// Card.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement , Tooltip , Legend);

const ProjectsCard3 = ({ title, content }) => {
    const data = {
        labels: ['Category 1', 'Category 2', 'Category 3'],
        datasets: [
          {
            data: [30, 40, 30],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      };
  return (


    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', margin: '16px', maxWidth: '300px' }}>
      <h3>FAC PROJECTS</h3>
      <Doughnut data={data} />
    </div>
  );
};

export default ProjectsCard3;