import { Box } from '@mui/material';
import MySidebar from './MySidebar'
import Navbar from './navbar'
import { Link } from 'react-router-dom';
const Layout = ({ children }) => {
  return (
    <Box >
      <Box>
        <Navbar />
      </Box>
      <Box display="flex">
        <MySidebar />
        <div className='container'>{children}</div>
      </Box>
      
    </Box>
  )
}

export default Layout