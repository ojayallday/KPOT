import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Sidebar from './sidebar'
import TopBar from './topBar'


const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth)

  return (

    <nav className='navba navbar-light bg-light'>
     

        {isAuth ? (
      

          <div>
            <Sidebar/>
            <TopBar/>
            <NavLink to='/dashboard' className='mx-3'>
              <span>Dashboard</span>
            </NavLink>

          </div>

        
        ) : (

          <div>
            <NavLink to='/login'>
              <span>Login</span>
            </NavLink>

            <NavLink to='/register' className='mx-3'>
              <span>Register</span>
            </NavLink>
          </div>
        )}
    
    </nav>

  )
}

export default Navbar