import axios from 'axios'

const initialState = []

const GET_ORDERS = 'GET_ORDERS'

export const getOrders = orders => {
  return {
    type: GET_ORDERS,
    orders
  }
}

export const getOrdersThunk = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/orders')
      dispatch(getOrders(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders
    default:
      return state
  }
}
