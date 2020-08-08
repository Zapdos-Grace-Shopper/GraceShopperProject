import axios from 'axios'

const initialState = {}

const GET_SINGLE_BRAND = 'GET_SINGLE_BRAND'

export const getSinglebrand = brand => {
  return {
    type: GET_SINGLE_BRAND,
    brand
  }
}

export const fetchSingleBrand = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/brands/${id}`)
      dispatch(getSinglebrand(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_BRAND:
      return action.brand
    default:
      return state
  }
}
