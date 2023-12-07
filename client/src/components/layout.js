import Navbar from './navbar'
import Sidebar from './sidebar'


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      
      <div className='container'>{children}</div>
    </div>
  )
}

export default Layout