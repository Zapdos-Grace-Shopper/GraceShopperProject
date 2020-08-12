const Sequelize = require('sequelize')
const db = require('../db')

const Purchased = db.define('purchased', {
  purchasePrice: {
    type: Sequelize.INTEGER
  },
  orderQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0
    }
  }
})

module.exports = Purchased
