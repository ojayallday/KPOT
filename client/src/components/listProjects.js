import React, { Fragment, useEffect, useState } from "react";
import EditProject from "./editProject";

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

  const getProjects = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/projects");
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

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
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
    </Fragment>
  );
};

export default ListProjects;