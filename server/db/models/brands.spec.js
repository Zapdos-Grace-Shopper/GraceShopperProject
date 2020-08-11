const {expect} = require('chai')
const db = require('../index')
const {Brand} = require('./index')

describe('Sequelize Brand Model', () => {
  before(() => db.sync({force: true}))
  afterEach(() => db.sync({force: true}))

  it('has fields name, imageURL, and description', async () => {
    const brand = await Brand.create({
      name: 'Fave Brand',
      imageURL: 'https://static2.bigstockphoto.com/5/3/3/large2/335667787.jpg',
      description:
        'this is my all time favorite brand and I buy all of their shoes'
    })

    expect(brand.name).to.equal('Fave Brand')
    expect(brand.imageURL).to.equal(
      'https://static2.bigstockphoto.com/5/3/3/large2/335667787.jpg'
    )
    expect(brand.description).to.equal(
      'this is my all time favorite brand and I buy all of their shoes'
    )
  })

  it('name cannot be null', async () => {
    const brand1 = await Brand.build()
    try {
      await brand1.validate()
      throw Error('validation should have failed without name')
    } catch (err) {
      expect(err.message).to.contain('cannot be null')
    }
  })

  it('name cannot be empty', async () => {
    const brand2 = await Brand.build({
      name: ''
    })
    try {
      await brand2.validate()
      throw Error('validation should have failed without name')
    } catch (err) {
      expect(err.message).to.contain('notEmpty')
    }
  })
})
