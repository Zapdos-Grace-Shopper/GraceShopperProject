import {expect} from 'chai'
import {fetchShoes, fetchAddShoe, fetchDeleteShoe} from './shoes'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('shoes reducer thunks', () => {
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

  describe('fetchShoes thunk', () => {
    xit('dispatches the GET_ALL_SHOES action', async () => {
      const fakeShoes = [
        {
          id: 1,
          name: 'loafer',
          brand: 'zapdos vintage',
          size: 8,
          price: 100,
          quantity: 3
        }
      ]
      mockAxios.onGet('/api/shoes').replyOnce(200, fakeShoes)
      await store.dispatch(fetchShoes())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_ALL_SHOES')
      expect(actions[0].shoes).to.be.deep.equal(fakeShoes)
    })
  })
})

//   describe('fetchAddShoe thunk', () => {
//     it('dispatched the ADD_SHOE action', async() => {
//         const fakeShoes = [{
//             id: 1,
//             name: 'loafer',
//             brand: 'zapdos vintage',
//             size: 8,
//             price: 100,
//             quantity: 3
//           }]
//         const newShoe = {
//             id: 2,
//             name: 'hills',
//             brand: 'zapdos vintage',
//             size: 8,
//             price: 100,
//             quantity: 3
//         }
//         mockAxios.onPost('/api/shoes').send(newShoe)
//         await store.dispatch(fetchAddShoe(newShoe))
//         const actions = store.getActions()

//         expect(actions[0].type).to.be.equal('ADD_SHOE')
//         expect(actions[1].shoes).to.be.deep.equal(newShoe)
//     })
//   })
