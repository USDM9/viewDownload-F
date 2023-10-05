import React from 'react'
import { Link } from 'react-router-dom'

const Register = ({ goLoginPage }) => {
  const handdleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='flex flex-col justify-center items-center '>

      <form onSubmit={(e) => handdleSubmit(e)} className='flex flex-col justify-center border-2 border-solid border-black p-[10%]'>
        <div className='flex justify-center'>
          <h2 className='text-textIconsColor text-[30px] uppercase'>
            Register
          </h2>
        </div>
        <label htmlFor='name'>Name:</label>
        <input name='user' id='name' type='email' placeholder='User Name' required />
        <label htmlFor='password'>Contraseña:</label>
        <input name='password' id='password' type='password' minLength={8} placeholder='Password' required />
        <span>
          ya tienes Cuenta?
          <b>
            <Link onClick={() => goLoginPage()}>login</Link>
          </b>
        </span>
        <input name='Submit' type='Submit' />
      </form>
    </div>

  )
}

export default Register
