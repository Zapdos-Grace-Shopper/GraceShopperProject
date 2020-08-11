import axios from 'axios'

//ACTION TYPES
const GET_ALL_USERS = 'GET_ALL_USERS'
const GET_SINGLE_USER = 'GET_SINGLE_USER'

//ACTION CREATORS
const getAllUsers = users => ({
  type: GET_ALL_USERS,
  users
})

const getSingleUser = user => ({
  type: GET_SINGLE_USER,
  user
})

//INITIAL STATE
const initialState = {
  users: [],
  selectedUser: {}
}

//THUNKS
export const fetchAllUsers = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/api/users')
      const action = getAllUsers(res.data)
      dispatch(action)
    } catch (e) {
      console.log(e)
    }
  }
}

export const fetchSingleUser = id => {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/users/${id}`)
      const action = getSingleUser(res.data)
      dispatch(action)
    } catch (e) {
      console.log(e)
    }
  }
}

export const deleteUserThunk = userId => {
  return async dispatch => {
    try {
      await axios.delete(`/api/users/${userId}`)
      dispatch(deleteUser(userId))
    } catch (e) {
      console.log(e)
    }
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {...state, users: action.users}
    case GET_SINGLE_USER:
      return {...state, selectedUser: action.user}
    default:
      return state
  }
}
