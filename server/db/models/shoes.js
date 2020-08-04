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
    default: 'https://static2.bigstockphoto.com/5/3/3/large2/335667787.jpg',
    allowNull: true
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
    default: 'beautiful shoes'
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true
    }
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    default: 'Zapdos original vintage'
  }
})

module.exports = Shoe
