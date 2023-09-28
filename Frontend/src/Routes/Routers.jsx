import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'
import Error from '../pages/Error/Error'
const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />

      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default Routers
