import React from 'react'
import {connect} from 'react-redux'
import {fetchGetCart, fetchDeleteShoeCart} from '../store/orders'
import {Link, Route} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {QuantityButton} from './cart-quantity-button'
import Checkout from './checkout'

class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart(this.props.userId)
  }

  render() {
    const cart = this.props.cart
    const shoesArr = cart.shoes
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

                  {/* //keep in local state until submission? or? */}
                  <div key={shoe.quantity}>
                    {shoe.quantity}
                    <QuantityButton />
                  </div>
                  {/* //alternative solution */}
                  {/* <div key={shoe.quantity}>
                    quantity: {shoe.quantity}  */}
                  {/* {this.props.amout && 
                    <h1>quantity: {this.props.amout}</h1>}
                    <Button onClick={() => this.props.increment()}>increase</Button> */}
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
            <Button>
              <Link to="/checkout">Checkout</Link>
            </Button>
          </div>
        )}
        {!cart.id && <div>your cart is currently empty</div>}
      </div>
    )
  }
}

const mapState = state => ({
  cart: state.orders.cart,
  userId: state.auth.id,
  amount: state.orders.quantity
})

const mapDispatch = dispatch => ({
  getCart: userId => dispatch(fetchGetCart(userId)),
  deleteShoeCart: (userId, shoeId) =>
    dispatch(fetchDeleteShoeCart(userId, shoeId))
  // increment: () => dispatch({ type: 'INCREASE_QUANTITY' })
})

export default connect(mapState, mapDispatch)(Cart)
