import React from 'react'

import ZapdosNavbar from './components/navbar'
import Routes from './routes'
// import Shoes from './components/AllShoes'
// import AddShoeForm from './components/add-shoe-form'
// import AddBrandForm from './components/add-brand-form'
// import {AdminDashboard} from './components/admin-dashboard'
// import SingleShoe from './components/single-shoe'
import Orders from './components/orders'
import {Footer} from './components/footer'

const App = () => {
  return (
    <div>
      <ZapdosNavbar />
      <Routes />
      <Footer />
      {/* <Orders /> */}
      {/* <Shoes /> */}
      {/* <AddBrandForm /> */}
      {/* <AddShoeForm /> */}
      {/* <AdminDashboard /> */}
      <SingleShoe />
      {/* <UpdateShoeForm /> */}
    </div>
  )
}

export default App
