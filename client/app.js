import React from 'react'

import ZapdosNavbar from './components/navbar'
import Routes from './routes'
import Orders from './components/orders'
// import AddShoeForm from './components/add-shoe-form'
// import AddBrandForm from './components/add-brand-form'

const App = () => {
  return (
    <div>
      <ZapdosNavbar />
      <Routes />
      <Orders />
      {/* <AddBrandForm /> */}
      {/* <AddShoeForm /> */}
    </div>
  )
}

export default App
