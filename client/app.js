import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
// import AddShoeForm from './components/add-shoe-form'
// import AddBrandForm from './components/add-brand-form'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      {/* <AddBrandForm /> */}
      {/* <AddShoeForm /> */}
    </div>
  )
}

export default App
