import axios from 'axios'

const ADD_TO_CART = 'DD_TO_CART'

export const addToCart = id => {
  return {
    type: DD_TO_CART,
    id
  }
}

export const addToCartThunk = id => {
  return async dispatch => {
    try {
      const {data} = axios.get(`api/shoes/${id}`)
      dispatch(addToCart(data))
    } catch (error) {
      console.log(error)
    }
  }
}
