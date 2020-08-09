import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
// import AddBrandForm from './add-brand-form'
import AddShoe from './add-shoe'

export default function AdminDashboard() {
  const [showShoeForm, setShowShoeForm] = useState(false)
  const [showBrandForm, setShowBrandForm] = useState(false)

  return (
    <div id="admin-dashboard">
      <div id="admin-dashboard-buttons">
        <Link to="/users" className="links">
          View All Users
        </Link>
        <br />
        <Button
          type="submit"
          value="brand"
          variant="outline-primary"
          onClick={() => setShowBrandForm(true)}
        >
          Add Brand
        </Button>
        <Button
          type="submit"
          value="shoe"
          variant="outline-primary"
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
