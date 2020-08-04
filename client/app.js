import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import Form from './components/add-shoe-form'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Form />
    </div>
  )
}

export default App
