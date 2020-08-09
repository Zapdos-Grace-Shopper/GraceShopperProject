import axios from 'axios'

const initialState = {orders: [], cart: {}}

const GET_ORDERS = 'GET_ORDERS'
const ADD_TO_CART = 'ADD_TO_CART'
const GET_CART = 'GET_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const DELETE_SHOE_CART = 'DELETE_SHOE_CART'
const COMPLETE_CHECKOUT = 'COMPLETE_CHECKOUT'

//action creators
export const getOrders = orders => {
  return {
    type: GET_ORDERS,
    orders
  }
}

export const addToCart = cart => {
  return {
    type: ADD_TO_CART || COMPLETE_CHECKOUT,
    cart
  }
}

export const getCart = cart => {
  return {
    type: GET_CART,
    cart
  }
}

export const removeFromCart = cart => {
  return {
    type: REMOVE_FROM_CART,
    cart
  }
}

export const deleteShoeCart = cart => {
  return {
    type: DELETE_SHOE_CART,
    cart
  }
}

export const completeCheckout = cart => {
  return {
    type: COMPLETE_CHECKOUT,
    cart
  }
}

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
      if (cart.data) {
        dispatch(getCart(cart.data))
      }
    } catch (err) {
      console.error(err)
    }
  }
}

export const fetchDeleteShoeCart = (userId, shoeId) => {
  return async dispatch => {
    try {
      await axios.delete(`/api/users/${userId}/cart`, {
        data: {shoeId}
      })
      const updatedCart = await axios.get(`/api/users/${userId}/cart`, {
        data: {shoeId}
      })
      dispatch(deleteShoeCart(updatedCart.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const completeCheckoutThunk = userId => {
  return async dispatch => {
    try {
      const cart = await axios.put(
        `/api/users/${userId}/cart/checkout/complete`
      )
      dispatch(completeCheckout(cart.data))
    } catch (error) {
      console.log(error)
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
    case DELETE_SHOE_CART:
      return {...state, cart: action.cart}
    case COMPLETE_CHECKOUT:
      return {...state, cart: action.cart}
    default:
      return state
  }
}
