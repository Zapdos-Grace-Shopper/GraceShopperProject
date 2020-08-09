import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleShoe, fetchUpdateShoe} from '../store/singleShoe'
import {Button} from 'react-bootstrap'
import ShoeForm from './shoe-form'
import {postUserCart} from '../store/orders'
import {Link} from 'react-router-dom'

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
  }

  handleAddCart() {
    const shoeId = this.props.match.params.id
    this.props.addToCart(shoeId, this.props.userId)
    setTimeout(() => {
      this.props.history.push('/cart')
    }, 500)
  }

  handleUpdateSubmit(event) {
    event.preventDefault()
    const id = this.props.match.params.id
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
    const brand = shoe.brand
    return (
      <div>
        <div>
          <img src={shoe.imageURL} className="singleShoeImg" />
          <div>Name: {shoe.name}</div>
          <div>Price: ${(shoe.price / 100).toFixed(2)}</div>
          <div>Quantity: {shoe.inventory}</div>
          <div>Size: {shoe.size}</div>
          <div>Description: {shoe.description}</div>
          Brand: {brand && <Link to={`/brands/${brand.id}`}>{brand.name}</Link>}
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
  isAdmin: state.auth.access === 'admin',
  userId: state.auth.id
})

const mapDispatch = dispatch => ({
  getSingleShoe: id => dispatch(fetchSingleShoe(id)),
  updateShoe: (id, updateInfo) => dispatch(fetchUpdateShoe(id, updateInfo)),
  addToCart: (shoeId, userId) => dispatch(postUserCart(shoeId, userId))
})

export default connect(mapState, mapDispatch)(SingleShoe)
