import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
// import AddShoeForm from './components/add-shoe-form'
// import AddBrandForm from './components/add-brand-form'
import {AdminDashboard} from './components/admin-dashboard'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      {/* <AddBrandForm /> */}
      {/* <AddShoeForm /> */}
      <AdminDashboard />
    </div>
  )
}

export default App
