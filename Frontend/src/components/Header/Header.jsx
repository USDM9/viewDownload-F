import React, { useState } from 'react'
import { Link } from 'react-router-dom'

/* === Images === */

import logo from '../../Assets/images/demo-logo.png'
import avatarLogin from '../../Assets/images/avatar.png'

/* === icons  === */

import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose, AiFillHome } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'

const Header = () => {
  const [toggleMenu, setToogleMenu] = useState(false)

  const openToggleMenu = () => {
    setToogleMenu(true)
  }

  const closeTogleMenu = () => {
    setToogleMenu(false)
  }

  return (
    <div>
      <div>
        {/* Menu Mobile */}
        <nav>
          {
            toggleMenu
              ? <ul
                  className='flex flex-col  justify-center  items-center text-textIconsColor text-[1.4rem] bg-[rgba(0,0,0,0.6)] gap-4 p-5
                  absolute w-full h-[100vh] z-100'
                  onClick={() => closeTogleMenu()}
                >
                <li className='flex justify-between items-center gap-2'>
                  <AiFillHome />
                  <Link to='/'>Inicio</Link>
                </li>
                <li className='flex justify-between items-center gap-2'>
                  <HiOutlineMail />
                  <Link to='/contact'>Contacto</Link>
                </li>
                </ul>
              : <></>
          }
        </nav>

        {toggleMenu
          ? <button className='flex justify-center items-center absolute w-[50px] h-[50px] z-[500]  text-white right-8 top-[1%]' onClick={() => closeTogleMenu()}>
            <AiOutlineClose className='w-7 h-7' />
            </button>
          : <></>}
      </div>

      {/* end Menu Mobile */}

      <nav className='navHeader  sticky top-0 h-auto'>
        <div className='containerLogo '>
          <img src={logo} alt='' className='logo w-[120px] h-[60px]' />
        </div>
        <ul className='containerLinks '>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/contact'>Contacto</Link>
          </li>
        </ul>
        <div className='containerLogin'>
          <div className='hidden'>
            <img src={avatarLogin} alt='' className='w-[44px] h-[44px] rounded-full' />
          </div>
          <ul className='flex gap-1'>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </div>
        <button className='menu ' onClick={() => openToggleMenu()} role='Menu'>
          {toggleMenu ? <BiMenu className='hidden' /> : <BiMenu className='w-12 h-12' />}
        </button>
      </nav>

    </div>
  )
}

export default Header
