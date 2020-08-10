import axios from 'axios'

const initialState = {}

const GET_SINGLE_SHOE = 'GET_SINGLE_SHOE'
const UPDATE_SHOE = 'UPDATE_SHOE'

export const getSingleShoe = shoe => {
  return {
    type: GET_SINGLE_SHOE,
    shoe
  }
}

export const updateShoe = shoe => {
  return {
    type: UPDATE_SHOE,
    shoe
  }
}

export const fetchSingleShoe = id => {
  return async dispatch => {
    try {
      const singleShoe = await axios.get(`/api/shoes/${id}`)
      dispatch(getSingleShoe(singleShoe.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const fetchUpdateShoe = shoe => {
  return async dispatch => {
    try {
      const singleUpdateShoe = await axios.put(`/api/shoes/${shoe.id}`, shoe)
      dispatch(updateShoe(singleUpdateShoe.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_SHOE:
      return action.shoe
    case UPDATE_SHOE:
      return action.shoe
    default:
      return state
  }
}
