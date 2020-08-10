/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

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
  // describe('validation', () => {
  //   describe('email validation', () => {
  //     beforeEach(async () => {
  //       await User.create({
  //         email: 'cody@puppybook.com',
  //         password: 'bones',
  //         firstname: 'cody',
  //         lastname: 'pug'
  //       })
  //     })
  //     it ('requires unique emails', async () => {
  //       expect(await User.create({
  //         email: 'cody@puppybook.com',
  //         password: 'treats',
  //         firstname: 'notCody',
  //         lastname: 'terrier'
  //       })).to.throw('Validation error')
  //     })
  //   })
  // })
}) // end describe('User model')
