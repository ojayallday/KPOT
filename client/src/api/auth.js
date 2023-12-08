import axios from 'axios'
axios.defaults.withCredentials = true

export async function onRegistration(registrationData) {
  return await axios.post(

    'http://localhost:8000/api/register',


    registrationData
  )
}

export async function onLogin(loginData) {

  return await axios.post('http://localhost:8000/api/login', loginData)
}

export async function onLogout() {
  return await axios.get('http://localhost:8000/api/logout')
}

export async function fetchProtectedInfo() {
  return await axios.get('http://localhost:8000/api/protected')
}

export async function onProject(projectData) {
  return await axios.post(
    'http://localhost:8000/api/new-project',
    projectData
  )
}
//API to fetch all created projects
export async function fetchProjectsInfo() {
  try {
    const response = await axios.get('http://localhost:8000/api/projects');
    return response.data;
  } catch (error) {
    // Handle errors appropriately, e.g., log the error or throw it
    console.error('Error fetching projects:', error.message);
    throw error;
  }
}

//FETCH registered users
export async function fetchUsersInfo() {
  try {
    const response = await axios.get('http://localhost:8000/api/get-users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.message);
    throw error;
  }

}