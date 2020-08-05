import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import Orders from './components/orders'
// import AddShoeForm from './components/add-shoe-form'
// import AddBrandForm from './components/add-brand-form'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Orders />
      {/* <AddBrandForm /> */}
      {/* <AddShoeForm /> */}
    </div>
  )
}

export default App
