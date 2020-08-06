import React from 'react'

import ZapdosNavbar from './components/navbar'
import Routes from './routes'
// import Shoes from './components/AllShoes'
// import AddShoeForm from './components/add-shoe-form'
// import AddBrandForm from './components/add-brand-form'
// import {AdminDashboard} from './components/admin-dashboard'
import SingleShoe from './components/single-shoe'
// import UpdateShoeForm from './components/update-shoe-form'

const App = () => {
  return (
    <div>
      <ZapdosNavbar />
      <Routes />
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
