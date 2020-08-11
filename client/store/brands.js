import axios from 'axios'

const GET_BRANDS = 'GET_BRANDS'
const ADD_BRAND = 'ADD_BRAND'

const initialState = []

export const getBrands = brands => {
  return {
    type: GET_BRANDS,
    brands
  }
}

const addBrand = brand => ({
  type: ADD_BRAND,
  brand
})

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

export const addBrandThunk = brand => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/brands', brand)
      dispatch(addBrand(data))
    } catch (e) {
      console.log(e)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BRANDS:
      return action.brands
    case ADD_BRAND:
      return [...state, action.brand]
    default:
      return state
  }
}
