import React from 'react'
import {connect} from 'react-redux'
import {fetchGetCart} from '../store/orders'

class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart(this.props.userId)
  }

  render() {
    const shoesArr = this.props.cart.shoes
    console.log(this.props.cart.shoes)
    return (
      <div>
        <h1>cart</h1>
        <div>
          {shoesArr && shoesArr.map(shoe => <p key={shoe.id}>{shoe.name}</p>)}
        </div>
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
