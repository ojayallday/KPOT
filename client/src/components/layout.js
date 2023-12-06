import MySidebar from './MySidebar'
import Navbar from './navbar'
import { Link } from 'react-router-dom';
const Layout = ({ children }) => {
  return (
    <div>
      
      <Navbar />
      <MySidebar/>
       
      <div className='container'>{children}</div>
    </div>
  )
}

export default Layout