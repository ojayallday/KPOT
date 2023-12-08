import Footer from './Footer'
import Navbar from './navbar'
import { Box } from '@mui/material';


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      
    <Box>
      <Box display="flex" height='800px'>
        <div className='container'>{children}</div>
      </Box>
      <Footer/>
    </Box>
    </div>

    
  )
}

export default Layout