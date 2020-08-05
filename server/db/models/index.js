const User = require('./user')
const Shoe = require('./shoes')
// const Brand = require('./brands')
const Order = require('./orders')
//  Associations
const db = require('../db')
User.hasMany(Order)
Order.belongsTo(User)

Order.belongsToMany(Shoe, {through: 'purchased'})
Shoe.belongsToMany(Order, {through: 'purchased'})
const Purchased = db.model('purchased')
// Shoe.belongsTo(Brand)
// Brand.hasMany(Shoe)

module.exports = {
  User,
  Shoe,
  // Brand,
  Purchased,
  Order
}
