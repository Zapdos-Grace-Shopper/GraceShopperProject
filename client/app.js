import React from 'react'

import ZapdosNavbar from './components/navbar'
import Routes from './routes'
import Shoes from './components/AllShoes'
// import AddShoeForm from './components/add-shoe-form'
// import AddBrandForm from './components/add-brand-form'

const App = () => {
  return (
    <div>
      <ZapdosNavbar />
      <Routes />
      <Shoes />
      {/* <AddBrandForm /> */}
      {/* <AddShoeForm /> */}
    </div>
  )
}

export default App
