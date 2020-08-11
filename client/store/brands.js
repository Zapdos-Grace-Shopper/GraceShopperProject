import axios from 'axios'

const GET_BRANDS = 'GET_BRANDS'

const initialState = []

export const getBrands = brands => {
  return {
    type: GET_BRANDS,
    brands
  }
}

export const getBrandsThunk = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/brands')
      dispatch(getBrands(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BRANDS:
      return action.brands
    default:
      return state
  }
}
