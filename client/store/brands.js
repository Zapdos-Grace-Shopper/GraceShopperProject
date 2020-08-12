import axios from 'axios'

const GET_BRANDS = 'GET_BRANDS'
const ADD_BRAND = 'ADD_BRAND'
// const UPDATE_BRAND = 'UPDATE_BRAND'
// const DELETE_BRAND = 'DELETE_BRAND'

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

// const updateBrand = brand => ({
//   type: UPDATE_BRAND,
//   brand
// })

// const deleteBrand = id => ({
//   type: DELETE_BRAND,
//   id
// })

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
      console.log('hit add brand thunk')
      const {data} = await axios.post('/api/brands', brand)
      dispatch(addBrand(data))
    } catch (e) {
      console.log(e)
    }
  }
}

// export const fetchUpdateBrand = brand => {
//   return async dispatch => {
//     try {
//       const res = await axios.put(`/api/shoes/${brand.id}`, brand)
//       dispatch(updateBrand(res.data))
//     } catch (err) {
//       console.error(err)
//     }
//   }
// }

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BRANDS:
      return action.brands
    case ADD_BRAND:
      return [...state, action.brand]
    // case UPDATE_BRAND: {
    //   let filteredState = state.filter(
    //     el => Number(el.id) !== Number(action.brand.id)
    //   )
    //   return [...filteredState, action.brand]
    // }
    // case DELETE_BRAND: {
    //   return state.filter(brand => Number(brand.id) !== Number(action.id))
    // }
    default:
      return state
  }
}
