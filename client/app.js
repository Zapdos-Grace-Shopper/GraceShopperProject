import React from 'react'

import ZapdosNavbar from './components/navbar'
import Routes from './routes'
// import AddShoeForm from './components/add-shoe-form'
// import AddBrandForm from './components/add-brand-form'
// import {AdminDashboard} from './components/admin-dashboard'
// import SingleShoe from './components/single-shoe'
import Orders from './components/orders'
import AllShoes from './components/AllShoes'

const App = () => {
  return (
    <div>
      <ZapdosNavbar />
      <Routes />
      {/* <Orders /> */}
      {/* <Shoes /> */}
      {/* <AddBrandForm /> */}
      {/* <AddShoeForm /> */}
      {/* <AdminDashboard /> */}
      {/* <SingleShoe /> */}
      <AllShoes />
    </div>
  )
}

export default App
