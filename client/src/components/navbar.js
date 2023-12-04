import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {Box,IconButton,useTheme} from '@mui/material'
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth)

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/*search bar*/}
      <Box
        display="flex"
        //backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchOutlinedIcon />
        </IconButton>
      </Box>

      <nav className='navbar navbar-light bg-light'>
        <div className='container'>
          <div>
            <NavLink to='/'>
              <span className='navbar-brand mb-0 h1'>Home</span>
            </NavLink>
          </div>

          {isAuth ? (
            <div>
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
        </div>
      </nav>
    </Box>
    
  )
}

export default Navbar