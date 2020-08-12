import axios from 'axios'

//ACTION TYPES
const GET_ALL_USERS = 'GET_ALL_USERS'
const GET_SINGLE_USER = 'GET_SINGLE_USER'
const UPDATE_USER = 'UPDATE_USER'
const DELETE_USER = 'DELETE_USER'

//ACTION CREATORS
const getAllUsers = users => ({
  type: GET_ALL_USERS,
  users
})

const getSingleUser = user => ({
  type: GET_SINGLE_USER,
  user
})

const updateUser = user => ({type: UPDATE_USER, user})

const deleteUser = userId => ({
  type: DELETE_USER,
  userId
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

export const updateUserThunk = user => {
  console.log('I hit the update thunk')
  return async dispatch => {
    try {
      const {firstname, lastname, email, shoeSize} = user
      console.log('user', user)
      const res = await axios.put(`/api/users/${user.id}`, {
        firstname,
        lastname,
        email,
        shoeSize
      })
      dispatch(updateUser(res.data))
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
    case UPDATE_USER: {
      const filteredUsers = state.users.filter(
        el => Number(el.id) !== Number(action.user.id)
      )
      return {...state, users: [action.user, ...filteredUsers]}
    }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(
          user => Number(user.id) !== Number(action.userId)
        )
      }
    default:
      return state
  }
}
