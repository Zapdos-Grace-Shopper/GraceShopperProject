import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const UPDATE_USER = 'UPDATE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const updateUser = user => ({type: UPDATE_USER, user})
/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (user, method) => async dispatch => {
  let res
  try {
    let post
    if (method === 'signup') {
      const {email, password, shoeSize, firstname, lastname} = user
      post = {
        email,
        password,
        shoeSize,
        firstname,
        lastname
      }
    }
    if (method === 'login') {
      const {email, password} = user
      post = {
        email,
        password
      }
    }
    res = await axios.post(`/auth/${method}`, post)
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/me')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const updateUserThunk = user => {
  return async dispatch => {
    try {
      const {firstname, lastname, email, shoeSize} = user
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

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      console.log(state)
      return action.user
    case UPDATE_USER:
      return action.user
    case REMOVE_USER:
      console.log(state)
      return defaultUser
    default:
      return state
  }
}
