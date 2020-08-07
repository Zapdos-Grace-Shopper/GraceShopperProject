import React from 'react'

import ZapdosNavbar from './components/navbar'
import Routes from './routes'
import {Footer} from './components/footer'

const App = () => {
  return (
    <div>
      <ZapdosNavbar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
