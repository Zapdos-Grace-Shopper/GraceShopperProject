import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleShoe, fetchUpdateShoe} from '../store/singleShoe'
import {Button} from 'react-bootstrap'
import UpdateShoeForm from './update-shoe-form'

// add react hooks to render props
// check that get price function works

class SingleShoe extends React.Component {
  // const shoe = props.shoe

  constructor() {
    super()
    // this.state = defaultState
    this.handleChange = this.handleChange.bind(this)
    this.handleAddCart = this.handleAddCart.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
  }

  componentDidMount() {
    const id = this.props.match.params.shoeId
    this.props.getSingleShoe(id)
  }

  handleChange(event) {
    // [event.target.name] = event.target.value
  }

  // OK - perhaps we can add this functionality when we create the cart
  handleAddCart() {}

  // OK - update shoe form only accessible to admins - need to conditionally render if have admin access
  handleUpdateSubmit(event) {
    event.preventDefault()
  }

  render() {
    // const shoe = this.props.shoe
    // console.log(this.props.match.params.shoeId)
    console.log(this.props)
    return (
      <div className="singleShoe" key="shoe.id">
        <img className="shoeImage" src={shoe.imageURL} />
        <div>{shoe.name}</div>
        <div>{shoe.brand}</div>

        {/* render shoe price function instead */}
        <div>{shoe.price}</div>

        <div>{shoe.size}</div>
        <div>{shoe.description}</div>
        <Button variant="outline-primary" type="submit" className="btn">
          Add to Cart
        </Button>
      </div>
    )
  }
}

const mapState = state => ({
  student: state.shoe
})

const mapDispatch = dispatch => ({
  getSingleShoe: id => dispatch(fetchSingleShoe(id)),
  updateShoe: (id, updateInfo) => dispatch(fetchUpdateShoe(id, updateInfo))
})

export default connect(mapState, mapDispatch)(SingleShoe)
