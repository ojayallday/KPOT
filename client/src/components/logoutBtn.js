
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'
import { fetchProtectedInfo, onLogout } from '../api/auth'
import Layout from '../components/layout'
import { unauthenticateUser } from '../redux/slices/authSlice'

const LogoutButton = () => {
    const dispatch = useDispatch()

    const logout = async () => {
        try {
          await onLogout()
    
          dispatch(unauthenticateUser())
          localStorage.removeItem('isAuth')
        } catch (error) {
          console.log(error.response)
        }
      }

  return (
    <button onClick={() => logout()}>
      <FontAwesomeIcon icon={faSignOutAlt} />
      Logout
    </button>
  );
};

export default LogoutButton;