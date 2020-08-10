const {expect} = require('chai')
const db = require('../index')
const {Order} = require('./index')

describe('Sequelize Orders Model', () => {
  before(() => db.sync({force: true}))
  afterEach(() => db.sync({force: true}))

  it('Orders has status field', async () => {
    const order = await Order.create({
      status: 'cart'
    })
    expect(order.status).to.equal('cart')
  })

  it('Orders status cannot be null', async () => {
    const order = Order.build()
    try {
      await order.validate()
      throw Error('validation should have failed without status')
    } catch (err) {
      expect(err.message).to.contain('cannot be null')
    }
  })
})
