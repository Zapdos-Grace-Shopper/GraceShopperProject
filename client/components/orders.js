import React from 'react'
import {connect} from 'react-redux'
import {getUserOrdersThunk} from '../store/orders'

class Orders extends React.Component {
  componentDidMount() {
    try {
      this.props.getUserOrders(this.props.id)
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    const {orders} = this.props
    return (
      <div>
        <h2 style={{textDecoration: 'double underline black'}}>Past Orders</h2>
        {orders.length
          ? orders.map(order => {
              let date = new Date(order.updatedAt)
              if (order.status === 'complete') {
                let totalPrice = 0
                return (
                  <div key={order.id} className="order-div">
                    <h5>Order date: {date.toLocaleDateString()}</h5>
                    <p>
                      Ordered by:{' '}
                      {order.user
                        ? `${order.user.firstname} ${order.user.lastname}`
                        : 'Unknown'}{' '}
                      || Status: {order.status}
                    </p>
                    <div>
                      <h6>Shoes Ordered:</h6>
                      {order.shoes.map(shoe => {
                        totalPrice += shoe.price
                        return (
                          <div key={shoe.id}>
                            <p key={shoe.name}>
                              {shoe.name}{' '}
                              <strong>${(shoe.price / 100).toFixed(2)}</strong>
                            </p>
                          </div>
                        )
                      })}
                    </div>
                    <div>
                      <strong>
                        Total Order Price: ${(totalPrice / 100).toFixed(2)}
                      </strong>
                    </div>
                  </div>
                )
              }
            })
          : 'No Orders'}
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
    getUserOrders: userId => dispatch(getUserOrdersThunk(userId))
  }
}

export default connect(mapState, mapDispatch)(Orders)
