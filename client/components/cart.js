import React from 'react'
import {connect} from 'react-redux'
import {fetchGetCart, fetchDeleteShoeCart} from '../store/orders'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {QuantityButton} from './cart-quantity-button'

class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart(this.props.userId)
  }

  render() {
    const cart = this.props.cart
    const shoesArr = cart.shoes

    return (
      <div>
        <h1>cart</h1>
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
                  {/* //keep in local state until submit hits? */}
                  <div key={shoe.quantity}>
                    {/* quantity: {shoe.quantity} increase {shoe.quantity + 1} */}
                    <QuantityButton />
                  </div>
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
    dispatch(fetchDeleteShoeCart(userId, shoeId))
})

export default connect(mapState, mapDispatch)(Cart)
