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

// posting to orders database, but not connecting to shoes in cart
router.post('/', async (req, res, next) => {
  try {
    const {userId, status, shoeId} = req.body
    const [order, wasCreated] = await Order.findOrCreate({
      where: {
        userId,
        status
      }
    })
    order.shoeId = shoeId
    await order.save()
    res.json(order)
  } catch (e) {
    next(e)
  }
})
