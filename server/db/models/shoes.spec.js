const {expect} = require('chai')
const db = require('../index')
const {Shoe} = require('./index')

describe('Sequelize Shoe Model', () => {
  before(() => db.sync({force: true}))
  afterEach(() => db.sync({force: true}))

  it('has fields name, price, size, and inventory', async () => {
    const shoe = await Shoe.create({
      name: 'Fave Shoe',
      price: 700,
      size: 8,
      inventory: 3
    })
    expect(shoe.name).to.equal('Fave Shoe')
    expect(shoe.price).to.equal(700)
    expect(shoe.size).to.equal(8)
    expect(shoe.inventory).to.equal(3)
  })

  it('name and size cannot be null', async () => {})

  it('price and inventory cannot be empty', async () => {
    const shoe = Shoe.build({
      name: 'Fave Shoe',
      price: '',
      size: 8,
      inventory: ''
    })
    try {
      await shoe.validate()
      throw Error(
        'validation should have failed with empty price and inventory'
      )
    } catch (err) {
      expect(err.message).to.contain('notEmpty')
    }
  })

  it('size must be between 4 and 12', async () => {
    const shoe = Shoe.build({
      name: 'Fave Shoe',
      price: 700,
      size: 3,
      inventory: 3
    })
    try {
      await shoe.validate()
      throw Error(
        'validation should have failed with empty price and inventory'
      )
    } catch (err) {
      expect(err.message).to.contain('min on size')
    }

    const shoe1 = Shoe.build({
      name: 'Fave Shoe',
      price: 700,
      size: 15,
      inventory: 3
    })
    try {
      await shoe1.validate()
      throw Error(
        'validation should have failed with empty price and inventory'
      )
    } catch (err) {
      expect(err.message).to.contain('max on size')
    }
  })
})
