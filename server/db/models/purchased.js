const Sequelize = require('sequelize')
const db = require('../db')

const Purchased = db.define('purchased', {
  purchasePrice: {
    type: Sequelize.INTEGER
  }
})

module.exports = Purchased
