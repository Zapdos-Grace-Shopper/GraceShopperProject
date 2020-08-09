import {expect} from 'chai'
import {getBrandsThunk} from './brands'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('brands reducer thunk creators', () => {
  let store
  let mockAxios

  const initialState = []

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchAllbrands', () => {
    it('eventually dispatches the GET_brands action', async () => {
      const fakebrands = [{name: 'gucci', description: 'the best brand ever'}]
      mockAxios.onGet('/api/brands').replyOnce(200, fakebrands)
      await store.dispatch(getBrandsThunk())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_BRANDS')
      expect(actions[0].brands).to.be.deep.equal(fakebrands)
    })
  })
})
