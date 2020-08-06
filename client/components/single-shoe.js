import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleShoe, fetchUpdateShoe} from '../store/singleShoe'
import {Button} from 'react-bootstrap'
import UpdateShoeForm from './update-shoe-form'

// add react hooks to render props
// check that get price function works

export const SingleShoe = props => {
  const shoe = props.shoe

  // OK - check out React hooks for state
  const handleChange = event => {
    // [event.target.name] = event.target.value
  }

  // OK - perhaps we can add this functionality when we create the cart
  const handleAddCart = () => {}

  // OK - update shoe form only accessible to admins - need to conditionally render if have admin access
  const handleUpdateSubmit = event => {
    event.preventDefault()
  }

  return (
    <h1>single shoe</h1>
    // <div className="singleShoe" key="shoe.id">
    //   <img className="shoeImage" src={shoe.imageURL} />
    //   <div>{shoe.name}</div>
    //   <div>{shoe.brand}</div>

    //   {/* render shoe price function instead */}
    //   <div>{shoe.price}</div>

    //   <div>{shoe.size}</div>
    //   <div>{shoe.description}</div>
    //   <Button variant="outline-primary" type="submit" className="btn">
    //     Add to Cart
    //   </Button>
    // </div>
  )
}

const mapState = state => ({
  student: state.shoe
})

const mapDispatch = dispatch => ({
  getSingleShoe: id => dispatch(fetchSingleShoe(id)),
  updateShoe: (id, updateInfo) => dispatch(fetchUpdateShoe(id, updateInfo))
})

export default connect(mapState, mapDispatch)(SingleShoe)
