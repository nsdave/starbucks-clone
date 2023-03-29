import React from 'react'
import '../styles/SignInButton.css'
import { Link } from 'react-router-dom'


const SignInButton = () => {
  return (
    <Link className='signInButton' to={'/account/signin'} >
    Sign In
    </Link>
  )
}

export default SignInButton