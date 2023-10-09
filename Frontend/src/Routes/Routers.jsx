import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'
import Register from '../pages/Register/Register'
import Error from '../pages/Error/Error'
import UserPage from '../pages/UserPage/UserPage'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/register' element={<Register />} />
      <Route path='/userPage' element={<UserPage />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default Routers
