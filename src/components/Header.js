import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectUser } from '../features/userSlice'
import { Example } from '../framerFiles/Example'

import '../styles/Header.css'
import FindAStore from './FindAStore'
import SignInButton from './SignInButton'
import SignUpButton from './SignUpButton'
import LogoutButton from './LogoutButton'

const Header = ({ menuPage }) => {
  const user = useSelector(selectUser)

  return (
    <div className={`header ${ menuPage && 'header__menuPage' } `} >

      <div className='header__left' >
        <Link className='header__logo' to={'/'} >
          <img src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png' alt='bucks' />
        </Link>
        <Link className='header__link' to={'/menu'} >
          menu
        </Link>
        <Link className='header__link' >
          Rewards
        </Link>
        <Link className='header__link' >
          Gift Cards
        </Link>
      </div>

      <div className='header__right' >
        <Example />
        <FindAStore />
        {!user ? (
          <>
            <Link to={'/account/signin'} >
              <SignInButton />
            </Link>
            <Link to={'/account/create'} >
              <SignUpButton />
            </Link>
          </>
        ) : (
          <div>
            {menuPage ? <LogoutButton /> : <Link to={'/menu'} >Order Now</Link>  }
          </div>
        ) }
      </div>
      
    </div>
  )
}

export default Header