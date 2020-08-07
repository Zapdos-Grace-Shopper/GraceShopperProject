import axios from 'axios'

const ADD_TO_CART = 'ADD_TO_CART'
const initialState = {
  shoes: []
}

export const addToCart = shoes => {
  return {
    type: ADD_TO_CART,
    shoes
  }
}

export const addToCartThunk = shoes => {
  return async dispatch => {
    try {
      const {data} = axios.post(`api/orders`, shoes)
      dispatch(addToCart(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {}
  }
}
