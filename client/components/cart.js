import React from 'react'
import {connect} from 'react-redux'
import {
  fetchGetCart,
  fetchDeleteShoeCart,
  changeQuantityCart
} from '../store/orders'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      quantity: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.getCart(this.props.userId)
  }

  handleClick() {
    this.setState({
      quantity: quantity + 1
    })
  }

  render() {
    const cart = this.props.cart
    const shoesArr = cart.shoes
    console.log(this.props)
    return (
      <div>
        <h1>Cart</h1>
        {cart && (
          <div>
            {shoesArr &&
              shoesArr.map(shoe => (
                <div key={shoe.id}>
                  <img className="cartImage" src={`${shoe.imageURL}`} />
                  <Link to={`/shoes/${shoe.id}`}>
                    <p>{shoe.name}</p>
                  </Link>
                  <div key={shoe.size}>size: {shoe.size}</div>
                  <div key={shoe.price}>
                    price: ${(shoe.price / 100).toFixed(2)}
                  </div>
                  {/* <div key={shoe.quantity}>
                    quantity: {shoe.quantity}  */}
                  <h1>quantity: {shoe.quantity}</h1>
                  <Button
                    onClick={() =>
                      this.props.increment(this.props.userId, shoe.id, 10)
                    }
                  >
                    increase
                  </Button>
                  {/* </div> */}
                  <Button
                    variant="outline-primary"
                    type="submit"
                    className="btn"
                    onClick={() =>
                      this.props.deleteShoeCart(this.props.userId, shoe.id)
                    }
                  >
                    Remove from Cart
                  </Button>
                </div>
              ))}
          </div>
        )}
        {!cart.id && <div>your cart is currently empty</div>}
      </div>
    )
  }
}

const mapState = state => ({
  cart: state.orders.cart,
  userId: state.auth.id
})

const mapDispatch = dispatch => ({
  getCart: userId => dispatch(fetchGetCart(userId)),
  deleteShoeCart: (userId, shoeId) =>
    dispatch(fetchDeleteShoeCart(userId, shoeId)),
  increment: (userId, shoeId, quantity) =>
    dispatch(changeQuantityCart(userId, shoeId, quantity))
})

export default connect(mapState, mapDispatch)(Cart)
