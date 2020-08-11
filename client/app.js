import React from 'react'

import ZapdosNavbar from './components/navbar'
import Routes from './routes'
import {Footer} from './components/footer'

const App = () => {
  return (
    <div className="content">
      <ZapdosNavbar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
