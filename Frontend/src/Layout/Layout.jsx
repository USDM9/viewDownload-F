import React from 'react'

import NavBar from '../components/Header/NavBar'
import Routers from '../Routes/Routers'
import Footer from '../components/Footer/Footer'

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
