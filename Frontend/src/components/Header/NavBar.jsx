import React from 'react'
import NavMobile from './components/NavMobile/NavMobile'

const NavBar = () => {
  return (
    <header>
      <nav role='nav' className='nav'>
        <NavMobile />
      </nav>
    </header>
  )
}

export default NavBar
