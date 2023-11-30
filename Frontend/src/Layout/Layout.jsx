import React, { useState } from 'react'

import NavBar from '../components/Header/NavBar'
import Routers from '../Routes/Routers'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  const [footerFlag, setFooterFlag] = useState(true)
  return (
    <>
      <NavBar />
      <>
        <Routers setFooterFlag={setFooterFlag} />
      </>
      <Footer footerFlag={footerFlag} />
    </>
  )
}

export default Layout
