const router = require('express').Router()
const {Order, Shoe} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [{model: Shoe, attributes: ['name', 'price']}]
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})
