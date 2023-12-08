
// Dashboard.js

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProtectedInfo, onLogout } from '../api/auth';
import Layout from '../components/layout';
import { unauthenticateUser } from '../redux/slices/authSlice';
import styled from 'styled-components';
import { fetchProjectsInfo } from '../api/auth';

import ProjectsCard1 from '../components/ProjectsCard1.jsx';
import ProjectsCard2 from '../components/ProjectsCard2.jsx';
import ProjectsCard3 from '../components/ProjectsCard3.jsx';

const StyledDashboard = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
`;

const SummaryCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  width: 200px;
  text-align: center;
`;


const Dashboard = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [protectedData, setProtectedData] = useState(null);
  const [projects, setProjects] = useState([]);

  const logout = async () => {
    try {
      await onLogout();

      dispatch(unauthenticateUser());
      localStorage.removeItem('isAuth');
    } catch (error) {
      console.log(error.response);
    }
  };

  const protectedInfo = async () => {
    try {
      const { data } = await fetchProtectedInfo();

      setProtectedData(data.info);

      setLoading(false);
    } catch (error) {
      logout();
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await fetchProjectsInfo();
        setProjects(projectsData || []); // Ensure projects is initialized as an array
      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    protectedInfo();
  }, []);

  // Calculate summary data
  const totalProjects = projects.length;
  const openStatusCounts =
    Array.isArray(projects) &&
    projects.reduce((acc, project) => {
      acc[project.open_status] = (acc[project.open_status] || 0) + 1;
      return acc;
    }, {});


  return loading ? (
    <Layout>
      <h1>Loading...</h1>
    </Layout>
  ) : (
    <div>
      <Layout>

        <h2>{protectedData}</h2>
        <StyledDashboard>
          <SummaryCard>
            <h3>Total Projects</h3>
            <p>{totalProjects}</p>
          </SummaryCard>
          {openStatusCounts &&
            Object.entries(openStatusCounts).map(([status, count]) => (
              <SummaryCard key={status}>
                <h3>{status}</h3>
                <p>{count}</p>
   
              </SummaryCard>
            ))}
            
            <ProjectsCard1/>
            <ProjectsCard2/>
            <ProjectsCard3/>
           
        </StyledDashboard>
      </Layout>
    </div>
  );
};

export default Dashboard;
