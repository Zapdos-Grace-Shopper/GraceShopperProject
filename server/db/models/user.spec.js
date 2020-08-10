/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  before(() => db.sync({force: true}))
  afterEach(() => db.sync({force: true}))

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
          email: 'cody@puppybook.com',
          password: 'bones',
          firstname: 'cody',
          lastname: 'pug'
        })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
  describe('validation', () => {
    describe('email validation', () => {
      beforeEach(async () => {
        await User.create({
          email: 'cody@puppybook.com',
          password: 'bones',
          firstname: 'cody',
          lastname: 'pug'
        })
      })
      it('requires firstnames that are not null', async () => {
        const user = User.build({
          email: 'lauren@gmail.com',
          lastname: 'Pitruzzello'
        })
        try {
          await user.validate()
          throw Error('validation should have failed without firstname')
        } catch (err) {
          expect(err.message).to.contain('cannot be null')
        }
      })
      it('requires lastnames that are not null', async () => {
        const user = User.build({
          email: 'lauren@gmail.com',
          firstname: 'Lauren'
        })
        try {
          await user.validate()
          throw Error('validation should have failed without lastname')
        } catch (err) {
          expect(err.message).to.contain('cannot be null')
        }
      })
      it('requires emails that are not null', async () => {
        const user = User.build({firstname: 'Lauren', lastname: 'Pitruzzello'})
        try {
          await user.validate()
          throw Error('validation should have failed without email')
        } catch (err) {
          expect(err.message).to.contain('cannot be null')
        }
      })
      it('requires unique emails', async () => {
        let user1 = await User.create({
          email: 'lauren@gmail.com',
          password: 'hello',
          firstname: 'Lauren',
          lastname: 'Nicole'
        })
        try {
          let user2 = await User.create({
            email: 'lauren@gmail.com',
            password: 'hello',
            firstname: 'Lauren',
            lastname: 'Pitruzzello'
          })
          await user2.validate()
          throw Error('validation should have failed without unique email')
        } catch (err) {
          expect(err.message).to.contain(`Validation error`)
        }
      })
    })
  })
}) // end describe('User model')
