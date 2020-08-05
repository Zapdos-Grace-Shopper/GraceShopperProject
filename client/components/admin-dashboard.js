import React, {useState} from 'react'
import {Button} from 'react-bootstrap'

import AddBrandForm from './add-brand-form'
import AddShoeForm from './add-shoe-form'

export const AdminDashboard = () => {
  const [showBrandForm, setShowBrandForm] = useState(false)
  const [showShoeForm, setShowShoeForm] = useState(false)

  return (
    <div id="admin-dashboard">
      <div id="user-profile" />
      <div id="analytics" />
      <div id="admin-dashboard-buttons">
        <Button
          type="submit"
          onClick={() => {
            setShowBrandForm(!showBrandForm)
            if (showShoeForm) {
              setShowShoeForm(false)
            }
          }}
        >
          Add Brand
        </Button>
        <Button
          type="submit"
          onClick={() => {
            setShowShoeForm(!showShoeForm)
            if (showBrandForm) {
              setShowBrandForm(false)
            }
          }}
        >
          Add Shoe
        </Button>
      </div>
      <div id="forms">
        {showBrandForm && <AddBrandForm />}
        {showShoeForm && <AddShoeForm />}
      </div>
    </div>
  )
}
