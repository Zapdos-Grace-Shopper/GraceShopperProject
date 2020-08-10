const Sequelize = require('sequelize')
const db = require('../db')

const Shoe = db.define('shoe', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue:
      'https://static2.bigstockphoto.com/5/3/3/large2/335667787.jpg',
    allowNull: true
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
      min: 0
    }
  },
  size: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 4,
      max: 12,
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
    defaultValue: 'beautiful shoes'
  },
  inventory: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
      min: 0
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0
    }
  }
})

module.exports = Shoe
