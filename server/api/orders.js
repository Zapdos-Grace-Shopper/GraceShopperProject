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

//creates order
router.post('/', async (req, res, next) => {
  try {
    const {userId, status, shoeId} = req.body
    const shoe = await Shoe.findByPk(shoeId)

    const [order, wasCreated] = await Order.findOrCreate({
      where: {
        userId,
        status
      }
    })
    const addedShoe = await order.addShoe(shoe)
    let [updatedOrder, updateWasCreated] = await Order.findOrCreate({
      where: {
        userId,
        status
      },
      include: {
        model: Shoe,
        attributes: ['name', 'price']
      }
    })
    res.json(updatedOrder)
  } catch (err) {
    next(err)
  }
})
