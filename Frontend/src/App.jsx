import React, { useContext } from 'react'
import Layout from './Layout/Layout'
import './index.css'
import './App.css'
import { userContext } from './Context/userContext'

const App = () => {
  const users = useContext(userContext)
  return (
    <>
      <userContext.Provider value={users}>
        <Layout />
      </userContext.Provider>
    </>

  )
}

export default App
