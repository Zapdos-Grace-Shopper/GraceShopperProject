import React from 'react'
import {connect} from 'react-redux'
import {
  fetchGetCart,
  fetchDeleteShoeCart,
  fetchUpdateQuantity
} from '../store/orders'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleSubtractClick = this.handleSubtractClick.bind(this)
  }

  componentDidMount() {
    this.props.getCart(this.props.userId)
  }

  handleAddClick(event) {
    if (event.target) {
      const shoeId = event.target.name
      const quantityUpdate = Number(1)
      const difference = event.target.value

      if (difference >= 1) {
        this.props.updateQuantity(this.props.userId, shoeId, quantityUpdate)
      } else {
        console.log('sorry, we are at our max')
      }
    }
  }
  handleSubtractClick(event) {
    if (event.target) {
      const shoeId = event.target.name
      const quantityUpdate = Number(-1)
      const currentQuant = event.target.value
      if (currentQuant > 1) {
        this.props.updateQuantity(this.props.userId, shoeId, quantityUpdate)
      }
    }
  }

  render() {
    const cart = this.props.cart
    const shoesArr = cart.shoes

    if (shoesArr) {
      console.log(shoesArr[0])
    }

    let totalPrice = 0
    return (
      <div className="cart">
        <h1>Cart</h1>
        <Button
          id="keep-shopping"
          variant="outline-primary"
          type="submit"
          className="btn"
          onClick={this.handleAddCart}
        >
          <Link to="/shoes">Keep shopping!</Link>
        </Button>
        {cart && (
          <div id="cart-details">
            {shoesArr &&
              shoesArr.map(shoe => {
                totalPrice += Number(shoe.price * shoe.purchased.orderQuantity)
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
                    <div>
                      OrderQuantity in Purchased Table:{' '}
                      {shoe.purchased.orderQuantity}
                    </div>
                    {/* <div>
                      <QuantityButton inventory={shoe.inventory} />
                    </div> */}
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
                    <Button
                      variant="outline-primary"
                      type="submit"
                      className="btn"
                      name={shoe.id}
                      value={
                        Number(shoe.inventory) -
                        Number(shoe.purchased.orderQuantity)
                      }
                      onClick={this.handleAddClick}
                    >
                      Add
                    </Button>
                    <Button
                      variant="outline-primary"
                      type="submit"
                      className="btn"
                      name={shoe.id}
                      value={Number(shoe.purchased.orderQuantity)}
                      onClick={this.handleSubtractClick}
                    >
                      Subtract
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
                // onClick={() =>
                //   this.props.updateQuantity(this.props.userId, quantArr)
                // }
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
  updateQuantity: (userId, shoeId, quantityUpdate) =>
    dispatch(fetchUpdateQuantity(userId, shoeId, quantityUpdate))
})

export default connect(mapState, mapDispatch)(Cart)
