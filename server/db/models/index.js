const User = require('./user')
const Shoe = require('./shoes')
// const Brand = require('./brands')
const Order = require('./orders')

//  Associations

User.hasMany(Order)
Order.belongsTo(User)

Order.belongsToMany(Shoe, {through: 'purchased'})
Shoe.belongsToMany(Order, {through: 'purchased'})

Shoe.belongsTo(Brand)
Brand.hasMany(Shoe)

module.exports = {
  User,
  Shoe,
  // Brand,
  Order
}
