import React, { Fragment, useEffect, useState } from "react";
import EditProject from "./editProject";
import { fetchProjectsInfo } from "../api/auth";
import Layout from "./layout";
import ProjectsTable from "./ProjectsTable";

const ListProjects = () => {
  const [projects, setProjects] = useState([]);

  //delete todo function

  const deleteProject = async id => {
    try {
      const deleteTodo = await fetch(`http://localhost:8000/api/projects/${id}`, {
        method: "DELETE"
      });

      setProjects(projects.filter(project => project.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProjectsInfo();
        // Access projects from the "projects" property in the response
        const projectsData = response.success ? response.projects : [];
        
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);


  return (
<div>
   <Layout>
    <h2>KPOT Projects</h2>
      {Array.isArray(projects) && projects.length > 0 ? (
        <ProjectsTable projects={projects} />
      ) : (
        <p>No projects found</p>
      )}
   </Layout>
   </div>
  );
};

export default ListProjects;