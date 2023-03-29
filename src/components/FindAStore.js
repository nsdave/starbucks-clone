import React from 'react'
import '../styles/FindAStore.css'
import { Link } from 'react-router-dom'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

function FindAStore() {
  return (
    <Link className='findAStore'>
      <LocationOnRoundedIcon />
      <h5>Find a store</h5>
    </Link>
  )
}

export default FindAStore