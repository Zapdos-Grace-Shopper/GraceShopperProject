import axios from 'axios'

const initialState = []

const GET_ALL_SHOES = 'GET_ALL_SHOES'

const getAllShoes = shoes => ({
  type: GET_ALL_SHOES,
  shoes
})

export const fetchShoes = () => {
  return async dispatch => {
    try {
      console.log('In the shoes thunk')
      const {data} = await axios.get('api/shoes')
      dispatch(getAllShoes(data))
    } catch (error) {
      console.log("Can't get these shoes!", error)
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SHOES: {
      return action.shoes
    }
    default:
      return state
  }
}
