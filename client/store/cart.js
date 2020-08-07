import axios from 'axios'
import store from './index'

const ADD_TO_CART = 'ADD_TO_CART'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'

const initialState = []

export const addToCart = shoes => {
  return {
    type: ADD_TO_CART,
    shoes
  }
}
export const updateQuantity = (shoes, payloadType) => {
  return {
    type: UPDATE_QUANTITY,
    shoes,
    payloadType
  }
}

export const addToCartThunk = shoes => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`api/orders`, shoes)
      dispatch(addToCart(data))
    } catch (error) {
      console.log(error)
    }
  }
}

//1. see if a user is logged in
//2. if yes, see if there's an open order (cart) with the user id
export const postUserCart = shoes => {
  return async () => {
    try {
      //3. if yes, add to the quantity
      //if no, create a new order
      const isLoggedIn = Object.values(store.getState().auth).length
      if (isLoggedIn) await axios.post(`api/orders/`, shoes)
    } catch (error) {
      console.log(`Can't update order`, error)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const cartToAdd = [...state]
      const selectedShoe = cartToAdd.find(shoe => shoe.id === action.shoes.id)
      if (selectedShoe) {
        selectedShoe.quantity += action.shoes.quantity
      } else {
        cartToAdd.push(action.shoes)
      }
      postUserCart(cartToAdd)
      return cartToAdd
    }
    case UPDATE_QUANTITY: {
      if (action.payloadType === 'increment') {
        const cart = [
          ...state.map(shoe => {
            if (shoe.id === action.shoes.id) shoe.quantity++
            return shoe
          })
        ]
        postUserCart(cart)
        return cart
      }
      if (action.payloadType === 'decrement') {
        const cart = [
          ...state.map(shoe => {
            if (shoe.id === action.shoes.id) shoe.quantity--
            return shoe
          })
        ]
        postUserCart(cart)
        return cart
      }
    }
    default:
      return state
  }
}
