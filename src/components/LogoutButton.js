import React from 'react'
import '../styles/LogoutButton.css'

// import { auth } from '../firebase'
// import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'

const LogoutButton = () => {
  // const dispatch = useDispatch()
  // const history = useHistory()

  const logout = () => {
    // auth
    //   .signOut()
    //   .then(() => {
    //     dispatch(logout())
    //     history.replace('/')
    //   })
    //   .catch((error) => alert(error.message))
  }

  return (
    <button className='logoutButton' onClick={logout} >
      Log Out
    </button>
  )
}

export default LogoutButton