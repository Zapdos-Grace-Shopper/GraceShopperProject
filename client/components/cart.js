import React from 'react'
import {connect} from 'react-redux'
import {fetchGetCart} from '../store/orders'

class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart(this.props.userId)
  }

  render() {
    const shoesArr = this.props.cart.shoes
    const cart = this.props.cart
    console.log('cart', cart)

    return (
      <div>
        <h1>cart</h1>
        {cart ? (
          <div>
            {shoesArr && shoesArr.map(shoe => <p key={shoe.id}>{shoe.name}</p>)}
          </div>
        ) : (
          <p>empty cart</p>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  cart: state.orders.cart,
  userId: state.auth.id
})

const mapDispatch = dispatch => ({
  getCart: userId => dispatch(fetchGetCart(userId))
})

export default connect(mapState, mapDispatch)(Cart)
