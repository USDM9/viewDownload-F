import React from 'react'
import { Link } from 'react-router-dom'

import listImg from '../../../../Assets/data/listImg'
import { getHanddleLogo } from './NavMobile.js.jsx'

const NavMobile = () => {
  const logo = getHanddleLogo(listImg, 'img')
  const alt = getHanddleLogo(listImg, 'alt')

  return (
    <div role='navMobile' className='navMobile'>
      <div role='containerImg' className='containerImg'>
        <img src={`${logo}`} alt={`${alt}`} />
      </div>
      <div className='containerList'>
        <ul role='ul'>
          <li role='li'>
            <Link to='/inicio'>Inicio</Link>
          </li>
          <li>
            <Link to='/Contacto'>Contacto</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavMobile
