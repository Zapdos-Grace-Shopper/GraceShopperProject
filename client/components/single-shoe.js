import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleShoe, fetchUpdateShoe} from '../store/singleShoe'
import {Button} from 'react-bootstrap'
import UpdateShoeForm from './update-shoe-form'

class SingleShoe extends React.Component {
  // constructor() {
  //   super()
  //   // this.state = defaultState
  //   this.handleChange = this.handleChange.bind(this)
  //   this.handleAddCart = this.handleAddCart.bind(this)
  //   this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
  // }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getSingleShoe(id)
  }

  // handleChange(event) {
  //   // [event.target.name] = event.target.value
  // }

  // OK - perhaps we can add this functionality when we create the cart
  // handleAddCart() {}

  // OK - update shoe form only accessible to admins - need to conditionally render if have admin access
  // handleUpdateSubmit(event) {
  //   event.preventDefault()
  // }

  render() {
    const {shoe} = this.props
    return (
      <div>
        <div>
          <img src={shoe.imageURL} />
          <div>name: {shoe.name}</div>
          <div>price: ${(shoe.price / 100).toFixed(2)}</div>
          <div>quantity: {shoe.quantity}</div>
          <div>size: {shoe.size}</div>
        </div>

        <div>
          <Button variant="outline-primary" type="submit" className="btn">
            Add to Cart
          </Button>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  shoe: state.shoe
})

const mapDispatch = dispatch => ({
  getSingleShoe: id => dispatch(fetchSingleShoe(id))
  // updateShoe: (id, updateInfo) => dispatch(fetchUpdateShoe(id, updateInfo)),
})

export default connect(mapState, mapDispatch)(SingleShoe)
