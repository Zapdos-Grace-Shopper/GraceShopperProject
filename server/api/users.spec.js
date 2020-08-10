const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../api')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    const codysEmail = 'cody@puppybook.com'
    const codysFirstName = 'Cody'
    const codysLastName = 'Pug'

    beforeEach(() => {
      return User.create({
        email: codysEmail,
        firstname: codysFirstName,
        lastname: codysLastName
      })
    })

    const userCredentials = {
      email: 'medicare@forall.now',
      password: '1234'
    }
    let authenticatedUser = request.agent(app)

    beforeEach(() => {
      authenticatedUser.post('/login').send(userCredentials)
    })

    xit('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/users/')
        .expect(200)
      // expect(res.body).to.be.an('array')
      // expect(res.body[0].email).to.be.equal(codysEmail)
    })
    xit('POST /api/users', async () => {
      const newUser = {
        email: 'lauren@gmail.com',
        firstname: 'Lauren',
        lastname: 'Pitruzzello'
      }
      const res = await request(app)
        .post('/api/users')
        .send(newUser)
        .expect('Content-Type', /json/)
        .expect(200)
      // expect(res.data.email).to.be.an('object')
      // expect(res.data.email).to.be.equal(newUser.email)
    })
  })
  describe('/api/users/:id', () => {
    const codysEmail = 'cody@puppybook.com'
    const codysFirstName = 'Cody'
    const codysLastName = 'Pug'

    beforeEach(() => {
      return User.create({
        email: codysEmail,
        firstname: codysFirstName,
        lastname: codysLastName
      })
    })

    xit('GET /api/users/:id/', async () => {
      const res = await request(app)
        .get('/api/users/:id')
        .expect(200)

      // expect(res.body).to.be.an('object')
      // expect(res.body.email).to.be.equal(codysEmail)
    })
  })
})
