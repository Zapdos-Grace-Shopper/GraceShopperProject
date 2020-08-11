import {expect} from 'chai'
import {fetchAllUsers, fetchSingleUser, deleteUserThunk} from './user'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('user reducer thunk creators', () => {
  let store
  let mockAxios

  const initialState = {users: [], selectedUser: {}}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchAllUsers', () => {
    it('eventually dispatches the GET_ALL_USERS action', async () => {
      const fakeUsers = [
        {firstname: 'Cody', lastname: 'Pug', email: 'cody@pug.me'},
        {firstname: 'Ruggles', lastname: 'Yorkie', email: 'ruggles@yorkie.me'}
      ]
      mockAxios.onGet('/api/users').replyOnce(200, fakeUsers)
      await store.dispatch(fetchAllUsers())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_ALL_USERS')
      expect(actions[0].users).to.be.deep.equal(fakeUsers)
    })
  })

  describe('fetchSingleUser', () => {
    it('eventually dispatches the GET_SINGLE_USER action', async () => {
      const fakeUser = {
        id: 1,
        firstname: 'Cody',
        lastname: 'Pug',
        email: 'cody@pug.me'
      }
      mockAxios.onGet(`/api/users/${fakeUser.id}`).replyOnce(200, fakeUser)
      await store.dispatch(fetchSingleUser(fakeUser.id))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_SINGLE_USER')
      expect(actions[0].user).to.be.deep.equal(fakeUser)
    })
  })

  describe('deleteUserThunk', () => {
    xit('eventually dispatched the DELETE_USER action', async () => {
      const fakeUserId = 1
      mockAxios.onDelete(`/api/users/${fakeUserId}`).replyOnce(200)
      await store.dispatch(deleteUserThunk(fakeUserId))
      const actions = store.getActions()
      expect(actions[0].userId).to.be.equal(fakeUserId)
    })
  })
})
