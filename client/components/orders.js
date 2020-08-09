import React from 'react'
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
    const {orders} = this.props
    return (
      <div key={orders.user}>
        {orders &&
          orders.map(order => {
            if (order.status === 'complete') {
              let totalPrice = 0
              return (
                <div key={order.id}>
                  <h3>Ordered by: {order.user ? order.user.firstname : ''}</h3>
                  <h4>Order status is {order.status}</h4>
                  <div>
                    {order.shoes.map(shoe => {
                      totalPrice += shoe.price
                      return (
                        <div key={shoe.id}>
                          <h5 key={shoe.name}>You purchased {shoe.name}</h5>
                          <h4 key={shoe.price}>
                            Price: ${(shoe.price / 100).toFixed(2)}
                          </h4>
                        </div>
                      )
                    })}
                  </div>
                  <div>Total Order Price: ${(totalPrice / 100).toFixed(2)}</div>
                </div>
              )
            }
          })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    orders: state.orders.orders
  }
}
const mapDispatch = dispatch => {
  return {
    fetchOrders: () => dispatch(getOrdersThunk())
  }
}

export default connect(mapState, mapDispatch)(Orders)
