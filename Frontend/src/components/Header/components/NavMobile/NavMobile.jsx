import React from 'react'
import { Link } from 'react-router-dom'

import listImg from '../../../../Assets/data/listImg'
import { getHanddleLogo } from './NavMobile.js.jsx'

const NavMobile = () => {
  const logo = getHanddleLogo(listImg, 'img')
  const alt = getHanddleLogo(listImg, 'alt')

  return (
    <div role='navMobile' className='navMobile'>
      <Link role='a' to='/home'>
        <div role='containerImg' className='containerNavLogo'>
          <img className='navLogo' src={`${logo}`} alt={`${alt}`} />
          <p className='navLogoText'>VIEWDOWNLOAD</p>
        </div>
      </Link>
    </div>
  )
}

export default NavMobile
