import axios from 'axios'

const initialState = []

const GET_ALL_SHOES = 'GET_ALL_SHOES'
const ADD_SHOE = 'ADD_SHOE'
const DELETE_SHOE = 'DELETE_SHOE'

const getAllShoes = shoes => ({
  type: GET_ALL_SHOES,
  shoes
})

const addShoe = newShoe => ({
  type: ADD_SHOE,
  newShoe
})

const deleteShoe = id => ({
  type: DELETE_SHOE,
  id
})

export const fetchShoes = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('api/shoes')
      dispatch(getAllShoes(data))
    } catch (error) {
      console.log("Can't get these shoes!", error)
    }
  }
}

export const fetchAddShoe = newShoe => {
  console.log('I hit the thunk')
  return async dispatch => {
    try {
      const addNewShoe = await axios.post(`/api/shoes`, newShoe)
      dispatch(addShoe(addNewShoe.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const fetchDeleteShoe = id => {
  return async dispatch => {
    try {
      await axios.delete(`/api/shoes/${id}`)
      dispatch(deleteShoe(id))
    } catch (err) {
      console.error(err)
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SHOES: {
      return action.shoes
    }
    case ADD_SHOE: {
      return [...state, action.newShoe]
    }
    case DELETE_SHOE: {
      return state.filter(shoe => shoe.id !== action.id)
    }
    default:
      return state
  }
}
