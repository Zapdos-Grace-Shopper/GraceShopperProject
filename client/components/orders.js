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
    // console.log('props', this.props.orders)
    const {orders} = this.props
    console.log(orders)
    return (
      <div>
        {orders &&
          orders.map(order => {
            if (order.status === 'complete') {
              return (
                <div>
                  <h3>Ordered by: {order.user ? order.user.firstname : ''}</h3>
                  <h4>Order status is {order.status}</h4>
                  <div>
                    {order.shoes.map(shoe => {
                      return (
                        <div key={shoe.id}>
                          <h5>You purchased {shoe.name}</h5>
                          <h4>Total: {shoe.price}</h4>
                        </div>
                      )
                    })}
                  </div>
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
