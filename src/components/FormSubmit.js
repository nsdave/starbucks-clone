import React from 'react'
import '../styles/FormSubmit.css'

const FormSubmit = ({ name, type, onClick }) => {
  return (
    <button className='formSubmit' type={type} >
        {name}
    </button>
  )
}

export default FormSubmit