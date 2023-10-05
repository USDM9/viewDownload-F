import React from 'react'
import Form from './Form'

const Login = ({ goRegisterPage, handdleSubmit, setImputName, setImputPassword }) => {
  return (
    <Form goRegisterPage={goRegisterPage} handdleSubmit={handdleSubmit} setImputPassword={setImputPassword} setImputName={setImputName} />
  )
}

export default Login
