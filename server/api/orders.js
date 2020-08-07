const router = require('express').Router()
const {Order, Shoe, User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let orders
    if (req.user.access === 'admin') {
      orders = await Order.findAll({
        include: [
          {model: Shoe, attributes: ['name', 'price']},
          {model: User, attributes: ['firstname', 'lastname', 'email']}
        ]
      })
    } else {
      orders = await Order.findAll({
        include: [
          {model: Shoe, attributes: ['name', 'price']},
          {
            model: User,
            where: {
              id: req.user.id
            },
            attributes: ['firstname', 'lastname', 'email']
          }
        ]
      })
    }
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

//this gets a specific user's order
router.get('/:orderId', async (req, res, next) => {
  try {
    const orderId = req.params.orderId
    const orderById = await Order.findByPk(orderId, {
      include: [{model: Shoe, attributes: ['name', 'price']}]
    })
    res.json(orderById)
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
