// const {expect} = require('chai')
// const request = require('supertest')
// const db = require('../db')
// const app = require('../index')
// const Order = db.model('order')

// describe('Order routes', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('/api/orders/', () => {
//     const status = 'complete'

//     beforeEach(() => {
//       return Order.create({
//         status: status
//       })
//     })

//     it('GET /api/orders', async () => {
//       const res = await request(app)
//         .get('/api/orders')
//         .expect(200)
// xit('GET /api/orders', async () => {
// const res = await request(app)
//   .get('/api/orders')
//   .expect(200)

//       expect(res.body).to.be.an('array')
//       expect(res.body[0].status).to.be.equal(status)
//     })
//   }) // end describe('/api/users')
// })
