import React, {useState} from 'react'
import {Button} from 'react-bootstrap'

// import AddBrandForm from './add-brand-form'
import AddShoe from './add-shoe'

export default function AdminDashboard() {
  const [showShoeForm, setShowShoeForm] = useState(false)
  const [showBrandForm, setShowBrandForm] = useState(false)

  return (
    <div id="admin-dashboard">
      <div id="user-profile" />
      <div id="analytics" />
      <div id="admin-dashboard-buttons">
        <Button
          type="submit"
          value="brand"
          onClick={() => setShowBrandForm(true)}
        >
          Add Brand
        </Button>
        <Button
          type="submit"
          value="shoe"
          onClick={() => setShowShoeForm(true)}
        >
          Add Shoe
        </Button>
      </div>
      <div id="forms">
        {/* {this.state.showBrandForm && <AddBrandForm />} */}
        {showShoeForm && <AddShoe />}
      </div>
    </div>
  )
}
