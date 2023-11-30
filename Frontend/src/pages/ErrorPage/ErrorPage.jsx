import React from 'react'
import './ErrorPage.css'

const ErrorPage = ({ err }) => {
  return (
    <div className='position'>
      <h1 className='pageErrText'>{err.message}</h1>
    </div>
  )
}

export default ErrorPage
