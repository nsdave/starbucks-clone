import React from 'react'
import '../styles/Heading.css'

const Heading = ({ heading }) => {
  return (
    <div className='heading' >
        {heading}
    </div>
  )
}

export default Heading