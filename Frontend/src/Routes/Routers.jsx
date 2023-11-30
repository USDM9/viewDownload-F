import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/Home'

import Error from '../pages/ErrorPage/ErrorPage'

import StreamingOp from '../pages/StreamingOp/StreamingOp.jsx'

const Routers = ({ setFooterFlag }) => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route
        path='/one-piece/:name/:id' element={<StreamingOp handle={setFooterFlag} />}
      />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default Routers
