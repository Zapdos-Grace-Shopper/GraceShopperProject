import axios from 'axios'

const initialState = {orders: [], cart: {}}

const GET_ORDERS = 'GET_ORDERS'
const ADD_TO_CART = 'ADD_TO_CART'
const GET_CART = 'GET_CART'
const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
const DELETE_SHOE_CART = 'DELETE_SHOE_CART'

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

export const deleteShoeCart = cart => {
  return {
    type: DELETE_SHOE_CART,
    cart
  }
}

export const increaseQuantity = cart => {
  return {
    type: INCREASE_QUANTITY,
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

// the corresponding express route works, but the axios call is not updating the cart
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
//not working
export const changeQuantityCart = (userId, shoeId, {quantity}) => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/users/${userId}/cart`, shoeId, {
        quantity
      })
      dispatch(increaseQuantity(data))
    } catch (err) {
      console.log(err)
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
    case INCREASE_QUANTITY:
      return {...state, cart: action.cart}
    default:
      return state
  }
}
