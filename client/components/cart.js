import React from 'react'
import {connect} from 'react-redux'
import {
  fetchGetCart,
  fetchDeleteShoeCart,
  fetchUpdateQuantity
} from '../store/orders'
import {Link} from 'react-router-dom'
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
    // want to fill in this Array as change quantity and only send to backend when click checkout
    const quantArr =
      shoesArr &&
      shoesArr.map(obj => {
        return {shoeId: obj.id, quantity: 1}
      })
    console.log(quantArr)

    let totalPrice = 0
    return (
      <div>
        <h1>Cart</h1>
        <Button
          variant="outline-primary"
          type="submit"
          className="btn"
          onClick={this.handleAddCart}
        >
          <Link to="/shoes">Keep shopping!</Link>
        </Button>
        {cart && (
          <div>
            {shoesArr &&
              shoesArr.map(shoe => {
                totalPrice += shoe.price
                return (
                  <div key={shoe.id}>
                    <img className="cartImage" src={`${shoe.imageURL}`} />
                    <Link to={`/shoes/${shoe.id}`}>
                      <p>{shoe.name}</p>
                    </Link>
                    <div key={shoe.size}>size: {shoe.size}</div>
                    <div key={shoe.price}>
                      price: ${(shoe.price / 100).toFixed(2)}
                    </div>
                    <div key={shoe.inventory}>
                      Quantity in stock: {shoe.inventory}
                      <QuantityButton inventory={shoe.inventory} />
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
                )
              })}
            <h5>Cart total: ${(totalPrice / 100).toFixed(2)}</h5>
            {cart.id && (
              <Button
                variant="outline-primary"
                type="submit"
                className="btn"
                onClick={() =>
                  this.props.updateQuantity(this.props.userId, quantArr)
                }
              >
                <Link to="/checkout">Checkout</Link>
              </Button>
            )}
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
  updateQuantity: (userId, shoeId, quantity) =>
    dispatch(fetchUpdateQuantity(userId, shoeId, quantity))
})

export default connect(mapState, mapDispatch)(Cart)
