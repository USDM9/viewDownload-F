import React from 'react'

import Footer from '../components/Footer/Footer'
import NavBar from '../components/Header/NavBar'
import Routers from '../Routes/Routers'

const Layout = () => {
  return (
    <main>
      <NavBar />
      <main>
        <Routers />
      </main>
      <Footer />
    </main>
  )
}

export default Layout
