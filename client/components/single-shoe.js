import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleShoe, fetchUpdateShoe} from '../store/singleShoe'
import {Button} from 'react-bootstrap'
import ShoeForm from './shoe-form'

class SingleShoe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      brand: '',
      imageURL: '',
      price: '',
      description: '',
      quantity: '',
      size: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAddCart = this.handleAddCart.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getSingleShoe(id)
  }

  handleChange(event) {
    console.log(event.target, 'handle event')
    this.setState({
      [event.target.name]: event.target.value
    })
    // console.log(this.state)
  }

  // if user logged in - check if order status "cart" exists with user id
  // if yes, associate this shoe id with that order id
  // if no, create new order with status "cart", associated with user id and shoe id

  // if no user login - create Local cart in browser
  handleAddCart() {
    const shoeId = this.props.match.params.id
  }

  // OK - update shoe form only accessible to admins - need to conditionally render if have admin access
  handleUpdateSubmit(event) {
    console.log('in submit')
    event.preventDefault()
    const id = this.props.match.params.id
    // const updateInfo = this.state
    const updateInfo = {
      name: this.state.name === '' ? this.props.shoe.name : this.state.name,
      brand: this.state.brand === '' ? this.props.shoe.brand : this.state.brand,
      imageURL:
        this.state.imageURL === ''
          ? this.props.shoe.imageURL
          : this.state.imageURL,
      price: this.state.price === '' ? this.props.shoe.price : this.state.price,
      description:
        this.state.description === ''
          ? this.props.shoe.description
          : this.state.description,
      quantity:
        this.state.quantity === ''
          ? this.props.shoe.quantity
          : this.state.quantity,
      size: this.state.size === '' ? this.props.shoe.size : this.state.size
    }

    this.props.updateShoe(id, updateInfo)
    this.setState({
      name: '',
      brand: '',
      imageURL: '',
      price: '',
      description: '',
      quantity: '',
      size: ''
    })
  }

  render() {
    const {shoe} = this.props
    console.log(shoe)
    return (
      <div>
        <div>
          <img src={shoe.imageURL} />
          <div>name: {shoe.name}</div>
          <div>price: ${(shoe.price / 100).toFixed(2)}</div>
          <div>quantity: {shoe.quantity}</div>
          <div>size: {shoe.size}</div>
          <div>description: {shoe.description}</div>
          <div>brand: {shoe.brand}</div>
        </div>

        <div>
          <Button
            variant="outline-primary"
            type="submit"
            className="btn"
            onClick={this.handleAddCart}
          >
            Add to Cart
          </Button>
        </div>

        <div>
          {this.props.isAdmin && (
            <ShoeForm
              handleChange={this.handleChange}
              onSubmit={this.handleUpdateSubmit}
              shoe={this.state}
            />
          )}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  shoe: state.singleShoeReducer,
  isAdmin: state.auth.access === 'admin'
})

const mapDispatch = dispatch => ({
  getSingleShoe: id => dispatch(fetchSingleShoe(id)),
  updateShoe: (id, updateInfo) => dispatch(fetchUpdateShoe(id, updateInfo))
})

export default connect(mapState, mapDispatch)(SingleShoe)
