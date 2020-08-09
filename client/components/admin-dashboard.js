import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import AddBrand from './add-brand'
import AddShoe from './add-shoe'

export default function AdminDashboard() {
  const [showShoeForm, setShowShoeForm] = useState(false)
  const [showBrandForm, setShowBrandForm] = useState(false)

  return (
    <div id="admin-dashboard">
      <Link to="/users" className="links">
        View All Users
      </Link>
      <div id="admin-dashboard-buttons">
        <br />
        <Button
          type="submit"
          value="brand"
          variant="outline-primary"
          onClick={() => {
            setShowBrandForm(true)
            setShowShoeForm(false)
          }}
        >
          Add Brand
        </Button>
        <Button
          type="submit"
          value="shoe"
          variant="outline-primary"
          onClick={() => {
            setShowShoeForm(true)
            setShowBrandForm(false)
          }}
        >
          Add Shoe
        </Button>
      </div>
      <div id="forms">
        {showBrandForm && <AddBrand />}
        {showShoeForm && <AddShoe />}
      </div>
    </div>
  )
}
