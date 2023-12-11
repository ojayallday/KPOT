import axios from 'axios';
axios.defaults.withCredentials = true;

const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

export async function onRegistration(registrationData) {
  return await axios.post(`${baseURL}/api/register`, registrationData);
}

export async function onLogin(loginData) {
  return await axios.post(`${baseURL}/api/login`, loginData);
}

export async function onLogout() {
  return await axios.get(`${baseURL}/api/logout`);
}

export async function fetchProtectedInfo() {
  return await axios.get(`${baseURL}/api/protected`);
}

export async function onProject(projectData) {
  return await axios.post(`${baseURL}/api/new-project`, projectData);
}

// API to fetch all created projects
export async function fetchProjectsInfo() {
  try {
    const response = await axios.get(`${baseURL}/api/projects`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    throw error;
  }
}

// FETCH registered users
export async function fetchUsersInfo() {
  try {
    const response = await axios.get(`${baseURL}/api/get-users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.message);
    throw error;
  }
}
