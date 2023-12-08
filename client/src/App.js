import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import { useSelector } from 'react-redux'
import { Fragment } from 'react'

//import components
import CreateProject from './components/createProject'
import ListProjects from './components/listProjects'
import GetUsers from './components/getUsers'
import UsersTable from './components/UsersTable'


const PrivateRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth)

  return <>{isAuth ? <Outlet /> : <Navigate to='/login' />}</>
}

const RestrictedRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth)

  return <>{!isAuth ? <Outlet /> : <Navigate to='/dashboard' />}</>
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route element={<PrivateRoutes />}>

          <Route path='/dashboard' element={<Dashboard />} /> 
          <Route path='/api/new-project' element={<CreateProject/>} />     
          <Route path='/api/projects' element={<ListProjects/>} /> 
          <Route path='/api/get-users' element={<GetUsers/>} />  
          </Route>
              ``

        <Route element={<RestrictedRoutes />}>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App