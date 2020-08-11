import axios from 'axios'

const GET_ALL_SHOES = 'GET_ALL_SHOES'
const ADD_SHOE = 'ADD_SHOE'
const UPDATE_SHOE = 'UPDATE_SHOE'
const DELETE_SHOE = 'DELETE_SHOE'

const initialState = []

const getAllShoes = shoes => ({
  type: GET_ALL_SHOES,
  shoes
})

const addShoe = newShoe => ({
  type: ADD_SHOE,
  newShoe
})

export const updateShoe = shoe => {
  return {
    type: UPDATE_SHOE,
    shoe
  }
}

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
    case UPDATE_SHOE: {
      let filteredState = state.filter(
        el => Number(el.id) !== Number(action.shoe.id)
      )
      return [action.shoe, ...filteredState]
    }
    case DELETE_SHOE: {
      return state.filter(shoe => Number(shoe.id) !== Number(action.id))
    }
    default:
      return state
  }
}
