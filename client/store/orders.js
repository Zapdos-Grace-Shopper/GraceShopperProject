import axios from 'axios'

const initialState = []

const GET_ORDERS = 'GET_ORDERS'
const ADD_TO_CART = 'ADD_TO_CART'
// const UPDATE_QUANTITY = 'UPDATE_QUANTITY'

//action creators
export const getOrders = orders => {
  return {
    type: GET_ORDERS,
    orders
  }
}

export const addToCart = shoe => {
  return {
    type: ADD_TO_CART,
    shoe
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

// 1. see if a user is logged in
// 2. if yes, see if there's an open order (cart) with the user id
export const postUserCart = (shoeId, userId) => {
  return async dispatch => {
    try {
      // 3. if yes, add to the quantity
      // if no, create a new order
      // const isLoggedIn = Object.values(store.getState().auth).length
      // if (isLoggedIn) await axios.post('api/orders', shoes)
      const cart = await axios.post('/api/orders', {
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

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders
    case ADD_TO_CART:
      return action.cart
    // {
    // const cartToAdd = [...state]
    // const selectedShoe = cartToAdd.find(shoe => shoe.id === action.shoes.id)
    //       if (selectedShoe) {
    //         selectedShoe.quantity += action.shoes.quantity
    //       } else {
    //         cartToAdd.push(action.shoes)
    //       }
    //       postUserCart(cartToAdd)
    //       return cartToAdd
    //     }
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
