import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Routers from '../Routes/Routers'

const Layout = () => {
  return (
    <main>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </main>
  )
}

export default Layout
