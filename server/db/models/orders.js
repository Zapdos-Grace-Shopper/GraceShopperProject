const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('complete', 'incomplete'),
    default: 'incomplete',
  }
})

module.exports = Order
