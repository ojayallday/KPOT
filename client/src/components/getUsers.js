import React, { Fragment, useEffect, useState } from "react";
import {  fetchUsersInfo } from "../api/auth";
import Layout from "./layout";
import UsersTable from "./UsersTable";

const GetUsers = () => {
  const [users, setUsers] = useState([]);

    //delete User function

    const deleteUser = async id => {
        try {
          const deleteTodo = await fetch(`http://localhost:8000/api/get-users/${id}`, {
            method: "DELETE"
          });
    
          setUsers(users.filter(user => user.user_id !== id));
        } catch (err) {
          console.error(err.message);
        }
      };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUsersInfo();
        // Access Userss from the "users" property in the response
        const usersData = response.success ? response.users : [];
        
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchData();
  }, []);


  return (

   <Layout>
    <h2 className="">Manage Registered Users</h2>
      {Array.isArray(users) && users.length > 0 ? (
        <UsersTable users={users} />
      ) : (
        <p>No users found</p>
      )}
   </Layout>
  
  );
};

export default GetUsers;