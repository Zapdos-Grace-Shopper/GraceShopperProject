import {expect} from 'chai'
import {fetchSingleShoe, fetchUpdateShoe} from './singleShoe'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('shoe reducer thunks', () => {
  let store
  let mockAxios

  const initialState = {}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchSingleShoe thunk', () => {
    it('dispatches the GET_SINGLE_SHOE action', async () => {
      const fakeShoe = {
        id: 1,
        name: 'loafer',
        brand: 'zapdos vintage',
        size: 8,
        price: 100,
        quantity: 3
      }
      mockAxios.onGet(`/api/shoes/${fakeShoe.id}`).replyOnce(200, fakeShoe)
      await store.dispatch(fetchSingleShoe(fakeShoe.id))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_SINGLE_SHOE')
      expect(actions[0].shoe).to.be.deep.equal(fakeShoe)
    })
  })

  describe('fetchUpdateShoe thunk', () => {
    xit('dispatches the UPDATE_SHOE action', async () => {
      const fakeShoe = {
        id: 1,
        name: 'loafer',
        brand: 'zapdos vintage',
        size: 8,
        price: 100,
        quantity: 3
      }
      const fakeShoeUpdate = {
        id: 1,
        name: 'clog',
        brand: 'zapdos new',
        size: 8,
        price: 100,
        quantity: 3
      }

      mockAxios
        .onPut(`/api/shoes/${fakeShoe.id}`, fakeShoeUpdate)
        .replyOnce(200, fakeShoeUpdate)
      await store.dispatch(fetchUpdateShoe(fakeShoe.id, fakeShoeUpdate))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('UPDATE_SHOE')
      expect(actions[0].shoe).to.be.deep.equal(fakeShoeUpdate)
    })
  })
})
