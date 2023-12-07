import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProtectedInfo, onLogout } from '../api/auth'
import Layout from '../components/layout'
import { unauthenticateUser } from '../redux/slices/authSlice'
import { Box } from '@mui/material';
import ProjectsCard1 from '../components/ProjectsCard1'
import ProjectsCard2 from '../components/ProjectsCard2'
import ProjectsCard3 from '../components/ProjectsCard3'
import ProjectReports from '../components/ProjectReports'

const Dashboard = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [protectedData, setProtectedData] = useState(null)

  const logout = async () => {
    try {
      await onLogout()

      dispatch(unauthenticateUser())
      localStorage.removeItem('isAuth')
    } catch (error) {
      console.log(error.response)
    }
  }

  const protectedInfo = async () => {
    try {
      const { data } = await fetchProtectedInfo()

      setProtectedData(data.info)

      setLoading(false)
    } catch (error) {
      logout()
    }
  }

  useEffect(() => {
    protectedInfo()
  }, [])

  return loading ? (
    <Layout>
      <h1>Loading...</h1>
    </Layout>
  ) : (
    <div>
      <Layout>
        <h1>Dashboard</h1>
        <h2>{protectedData}</h2>

        <button onClick={() => logout()} className='btn btn-primary'>
          Logout
        </button>
        <Box>
          <Box sx={{display:'flex'}} >
            <ProjectsCard1/>
            <ProjectsCard2/>
            <ProjectsCard3/>
          </Box>
          <Box>
            <ProjectReports/>
          </Box>
          
        </Box>
      </Layout>
    </div>
  )
}

export default Dashboard