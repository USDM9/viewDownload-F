import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../Assets/images/demo-logo.png'
import avatarLogin from '../../Assets/images/avatar.png'

const Header = () => {
  return (
    <div className='container'>
      <nav className='navHeader'>
        <div className='w-[180px]'>
          <img src={logo} alt='' className='logo' />
        </div>
        <ul className='flex gap-7'>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/contact'>Contacto</Link>
          </li>
        </ul>
        <div className='flex items-center gap-4 '>
          <div className='hidden'>
            <img src={avatarLogin} alt='' className='w-[44px] h-[44px] rounded-full' />
          </div>
          <Link to='/login'>Login</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
