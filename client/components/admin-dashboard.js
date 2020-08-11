import React, {useState, useEffect, useReducer} from 'react'
import {useDispatch} from 'react-redux'
import {Button} from 'react-bootstrap'
import AddBrand from './add-brand'
import AddShoe from './add-shoe'
import AllUsers from './all-users'
// import { fetchAllUsers } from '../store/user'
// import {getOrdersThunk} from '../store/orders'

export default function AdminDashboard() {
  const [showShoeForm, setShowShoeForm] = useState(false)
  const [showBrandForm, setShowBrandForm] = useState(false)
  const [showAllUsers, setShowAllUsers] = useState(false)

  // const dispatch = useDispatch()
  // useEffect(() => {dispatch(fetchAllUsers())})
  // useEffect(() => {dispatch(getOrdersThunk())})

  return (
    <div className="admin-dashboard">
      <div className="admin-analytics" />
      <div className="admin-dashboard-buttons">
        <Button
          variant="outline-primary"
          onClick={() => {
            setShowAllUsers(true)
            setShowBrandForm(false)
            setShowShoeForm(false)
          }}
        >
          ManageUsers
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => {
            setShowBrandForm(true)
            setShowAllUsers(false)
            setShowShoeForm(false)
          }}
        >
          Add Brand
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => {
            setShowShoeForm(true)
            setShowAllUsers(false)
            setShowBrandForm(false)
          }}
        >
          Add Shoe
        </Button>
      </div>
      <div id="admin-pages">
        {showBrandForm && <AddBrand />}
        {showShoeForm && <AddShoe />}
        {showAllUsers && <AllUsers />}
      </div>
    </div>
  )
}
