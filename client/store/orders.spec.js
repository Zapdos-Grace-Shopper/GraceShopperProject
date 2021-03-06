import {expect} from 'chai'
import {getOrdersThunk} from './orders'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import orders from './orders'
import {types} from 'pg'
const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('orders reducer thunk creators', () => {
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

  describe('fetchAllOrders', () => {
    it('eventually dispatches the GET_ORDERS action', async () => {
      const fakeOrders = [{status: 'complete'}]
      mockAxios.onGet('/api/orders').replyOnce(200, fakeOrders)
      await store.dispatch(getOrdersThunk())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_ORDERS')
      expect(actions[0].orders).to.be.deep.equal(fakeOrders)
    })
  })
  describe('orders reducer', () => {
    it('should return the initial state', () => {
      expect(orders(undefined, {})).to.be.deep.equal({orders: [], cart: {}})
    })
    it('should handle ADD_TO_CART', () => {
      expect(
        orders(
          {
            cart: {
              order: {
                shoeId: 1
              }
            }
          },
          {
            type: types.ADD_TO_CART,
            order: {
              shoeId: 1
            }
          }
        )
      ).to.be.deep.equal({
        cart: {
          order: {
            shoeId: 1
          }
        }
      })
    })
  })
})
