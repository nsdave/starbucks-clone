import React from 'react'
import { Link } from 'react-router-dom'


import '../styles/MenuItem.css'

const MenuItem = ({ type, image }) => {
  return (
    <div>
        <Link className='menuItem' >
            <img src={image} alt={type} className="menuItem__image" />
            <h4 className='menuItem__type' >{type}</h4>
        </Link>
    </div>
  )
}

export default MenuItem