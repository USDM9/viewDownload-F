import React from 'react'

const Home = () => {
  return (
    <div>
      Home Page
    </div>
  )
}

export default Home

/*

import { React, useState, useContext } from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'
import { userContext } from '../../Context/userContext'

*/

/*

  const user = useContext(userContext)
  const [goRegister, setGoRegister] = useState(false)
  const [isConfirm, setIsConfirm] = useState(false)
  const [imputName, setImputName] = useState('')
  const [imputPassword, setImputPassword] = useState('')

  const goRegisterPage = () => {
    setGoRegister(true)
  }

  const goLoginPage = () => {
    setGoRegister(false)
  }

  /* Login --> Form

  const handdleSubmit = (e) => {
    e.preventDefault()
    user.forEach((item, index) => {
      if (item.user === imputName.toLowerCase() && item.password === imputPassword.toString()) {
        setIsConfirm(true)
      }
    })
  }

*/

/*

    <main>
      {isConfirm
        ? <UserPage />

        : <div className=' grid grid-rows-2 h-[75vh]  bg-lightPrimaryColor sm:grid-cols-2  '>
          <div className='w-full   flex  items-center '>
            <h1 className=' text-textIconsColor ml-10'>
              Bien venido a ViewDonload
            </h1>
          </div>

          {goRegister ? <Register goLoginPage={goLoginPage} /> : <Login goRegisterPage={goRegisterPage} handdleSubmit={handdleSubmit} setImputPassword={setImputPassword} setImputName={setImputName} />}

        </div>}
    </main>

*/
