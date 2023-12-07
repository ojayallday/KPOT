import { Box } from '@mui/material';
import MySidebar from './MySidebar'
import Navbar from './navbar'
import { Link } from 'react-router-dom';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <Box  >
      <Box>
        <Navbar />
      </Box>
      <Box display="flex" height='800px'>
        <MySidebar />
        <div className='container'>{children}</div>
      </Box>
      <Footer/>
    </Box>
  )
}

export default Layout