const {expect} = require('chai')
const request = require('supertest')
const app = require('../api')
const agent = request.agent(app)
const db = require('../db')
const Shoe = db.model('shoe')

xdescribe('Shoes routes:', () => {
  before(() => {
    return db.sync({force: true})
  })

  describe('/api/shoes', () => {
    beforeEach(() => {
      return Shoe.create({
        name: 'bestShoes',
        size: 7,
        inventory: 10
      })
    })

    it('GET /api/shoes', async () => {
      const res = await request(app)
        .get('/api/shoes')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].inventory).to.be.equal('10')
    })

    it('POST /api/shoes', async () => {
      await agent
        .post('/api/shoes')
        .send({
          name: 'the worst shoes, created by POST method',
          size: 4,
          inventory: 24
        })
        .expect(200)

      const postShoes = await Shoe.findOne({
        where: {name: 'the worst shoes, created by POST method'}
      })

      expect(postShoes.name).to.equal('the worst shoes, created by POST method')
    })
  })

  describe('/api/shoes/:id', () => {
    beforeEach(() => {
      return Shoe.create({
        name: 'bestShoes',
        size: 6,
        inventory: 10
      })
    })
    it('GET /api/shoes/:id', async () => {
      const res = await request(app)
        .get('/api/shoes/:id')
        .expect(200)

      expect(res.body).to.be.an('object')
      expect(res.body.name).to.be.equal('bestShoes')
    })
  })

  it('PUT /api/shoes/:id', async () => {
    const res = await agent
      .put('/api/shoes/:id')
      .send({
        name: 'the worst shoes'
      })
      .expect(200)

    expect(res.body.name).to.be.equal('the worst shoes')
  })
})
