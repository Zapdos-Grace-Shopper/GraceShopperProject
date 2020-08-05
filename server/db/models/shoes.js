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
  brand: {
    type: Sequelize.STRING,
    defaultValue: 'Zapdos Vintage',
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue:
      'https://static2.bigstockphoto.com/5/3/3/large2/335667787.jpg',
    allowNull: true
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
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
      max: 12
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
    defaultValue: 'beautiful shoes'
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Shoe
