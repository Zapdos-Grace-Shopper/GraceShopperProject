import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getOrdersThunk} from '../store/orders'

class Orders extends React.Component {
  componentDidMount() {
    try {
      this.props.fetchOrders()
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    // console.log('props', this.props.orders)
    const {orders} = this.props
    console.log(orders)
    return (
      <div>
        {orders &&
          orders.map(order => {
            return (
              <div key={order.id}>
                <h4>Order status is {order.status}</h4>

                <div>
                  {order.shoes.map(shoe => {
                    return (
                      <div key={shoe.id}>
                        <h4>Shoes are {shoe.name}</h4>
                        <h4>shoe price {shoe.price}</h4>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    orders: state.orders
  }
}
const mapDispatch = dispatch => {
  return {
    fetchOrders: () => dispatch(getOrdersThunk())
  }
}

export default connect(mapState, mapDispatch)(Orders)
