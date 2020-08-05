import axios from 'axios'

const GET_SHOES = 'GET_SHOES'

export const getShoes = shoes => ({
  type: GET_SHOES,
  shoes
})

export const fetchShoes = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/shoes')
      dispatch(getShoes(data))
    } catch (error) {
      console.log("Can't get shoes!", error)
    }
  }
}

const initialState = []

const shoesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOES: {
      return action.shoes
    }
    default: {
      return state
    }
  }
}

export default shoesReducer
