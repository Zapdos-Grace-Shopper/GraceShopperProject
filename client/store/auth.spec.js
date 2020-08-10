/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {me, logout, updateUserThunk} from './auth'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {user: {}}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('me', () => {
    it('eventually dispatches the GET USER action', async () => {
      const fakeUser = {email: 'Cody'}
      mockAxios.onGet('/auth/me').replyOnce(200, fakeUser)
      await store.dispatch(me())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_USER')
      expect(actions[0].user).to.be.deep.equal(fakeUser)
    })
  })

  describe('logout', () => {
    it('logout: eventually dispatches the REMOVE_USER action', async () => {
      mockAxios.onPost('/auth/logout').replyOnce(204)
      await store.dispatch(logout())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('REMOVE_USER')
      expect(history.location.pathname).to.be.equal('/login')
    })
  })

  describe('updateUserThunk', () => {
    xit('eventually dispatches UPDATE_USER action', async () => {
      let userUpdate = {
        id: 1,
        firstname: 'Brian',
        lastname: 'Bulldog',
        email: 'brian@bulldog.com',
        shoeSize: '7'
      }
      mockAxios.onPut(`/auth/users/${userUpdate.id}`, userUpdate).reply(204)
      await store.dispatch(updateUserThunk(userUpdate))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('UPDATE_USER')
    })
  })
})
