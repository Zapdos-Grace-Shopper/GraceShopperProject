const User = require('./user')
const Shoe = require('./shoes')
const Brand = require('./brands')
const Order = require('./orders')
const Purchased = require('./purchased')

User.hasMany(Order)
Order.belongsTo(User)

Order.belongsToMany(Shoe, {through: Purchased})
Shoe.belongsToMany(Order, {through: Purchased})

Shoe.belongsTo(Brand)
Brand.hasMany(Shoe)

module.exports = {
  User,
  Shoe,
  Brand,
  Purchased,
  Order
}
