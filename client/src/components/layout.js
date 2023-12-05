import MySidebar from './MySidebar'
import Navbar from './navbar'

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