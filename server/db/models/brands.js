const Sequelize = require('sequelize')
const db = require('../db')

const Brand = db.define('brand', {
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
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
    default: 'we love this brand, hope you do too!'
  }
})

module.exports = Brand
