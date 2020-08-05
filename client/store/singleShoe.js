import axios from 'axios'

const initialState = {}

const GET_SINGLE_SHOE = 'GET_SINGLE_SHOE'
const UPDATE_SHOE = 'UPDATE_SINGLE_SHOE'

const getSingleShoe = shoe => ({
  type: GET_SINGLE_SHOE,
  shoe
})

const updateShoe = shoe => ({
  tye: UPDATE_SHOE,
  shoe
})

export const fetchSingleShoe = id => {
  return async dispatch => {
    try {
      const singleShoe = await axios.get(`api/shoes/${id}`)
      dispatch(getSingleShoe(singleShoe.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const fetchUpdateShoe = (id, updateInfo) => {
  return async dispatch => {
    try {
      const singleUpdateShoe = await axios.put(`api/shoes/${id}`, updateInfo)
      dispatch(updateShoe(singleUpdateShoe.data))
    } catch (err) {
      console.error(err)
    }
  }
}

const singleShoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_SHOE:
      return action.shoe
    case UPDATE_SHOE:
      return action.shoe
    default:
      return state
  }
}

export default singleShoeReducer
