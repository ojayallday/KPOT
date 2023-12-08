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



/*  const getProjects = async () => {
    try {
      const response = await (fetchProjectsInfo);
      const jsonData = await response.json();

      setProjects(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  

  useEffect(() => {
    getProjects();
  }, []);

  console.log(projects);

  */

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

   <Layout>
    <h2>Projects</h2>
      {Array.isArray(projects) && projects.length > 0 ? (
        <ProjectsTable projects={projects} />
      ) : (
        <p>No projects found</p>
      )}
   </Layout>
  

    /*
    <Layout>


      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Project Description</th>
            <th>PO</th>
            <th>Region</th>
            <th>Rollout Partner</th>
            <th>MSP</th>
            <th>Assigned Engineer</th>
            <th>OAC Date</th>
            <th>FAC Date</th>
           
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */

          /*
          {projects.map(project => (
            <tr key={project.id}>
              <td>{project.description}</td>
              <td>
                <EditProject project={project} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProject(project.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>

    */
  );
};

export default ListProjects;