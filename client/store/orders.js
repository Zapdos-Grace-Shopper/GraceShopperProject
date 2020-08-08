import axios from 'axios'

const initialState = {orders: [], cart: {}}

const GET_ORDERS = 'GET_ORDERS'
const ADD_TO_CART = 'ADD_TO_CART'
const GET_CART = 'GET_CART'
// const UPDATE_QUANTITY = 'UPDATE_QUANTITY'

//action creators
export const getOrders = orders => {
  return {
    type: GET_ORDERS,
    orders
  }
}

export const addToCart = cart => {
  return {
    type: ADD_TO_CART,
    cart
  }
}

export const getCart = cart => {
  return {
    type: GET_CART,
    cart
  }
}

// export const updateQuantity = (shoes, payloadType) => {
//   return {
//     type: UPDATE_QUANTITY,
//     shoes,
//     payloadType
//   }
// }

//thunks
export const getOrdersThunk = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('api/orders')
      dispatch(getOrders(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const postUserCart = (shoeId, userId) => {
  return async dispatch => {
    try {
      const cart = await axios.post('/api/orders/', {
        shoeId,
        userId,
        status: 'cart'
      })
      dispatch(addToCart(cart.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchGetCart = userId => {
  return async dispatch => {
    try {
      const cart = await axios.get(`/api/users/${userId}/cart`)
      console.log('cart in thunk', cart)
      if (cart.data) {
        dispatch(getCart(cart.data))
      }
    } catch (err) {
      console.error(err)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return {...state, orders: action.orders}
    case ADD_TO_CART:
      return {...state, cart: action.cart}
    case GET_CART:
      return {...state, cart: action.cart}

    // case UPDATE_QUANTITY: {
    //   if (action.payloadType === 'increment') {
    //     const cart = [
    //       ...state.map(shoe => {
    //         if (shoe.id === action.shoes.id) shoe.quantity++
    //         return shoe
    //       })
    //     ]
    //     postUserCart(cart)
    //     return cart
    //   }
    //   if (action.payloadType === 'decrement') {
    //     const cart = [
    //       ...state.map(shoe => {
    //         if (shoe.id === action.shoes.id) shoe.quantity--
    //         return shoe
    //       })
    //     ]
    //     postUserCart(cart)
    //     return cart
    //   }
    // }
    default:
      return state
  }
}
