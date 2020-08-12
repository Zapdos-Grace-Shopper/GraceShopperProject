const router = require('express').Router()
const {Order, Shoe, User} = require('../db/models')
const areYouAdmin = require('./utils')

module.exports = router

router.get('/', areYouAdmin, async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [
        {model: Shoe, attributes: ['name', 'price']},
        {
          model: User,
          attributes: ['firstname', 'lastname', 'email']
        }
      ]
    })
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.get('/:orderId', areYouAdmin, async (req, res, next) => {
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

router.get('/user/:id', async (req, res, next) => {
  try {
    if (req.user && Number(req.user.id) === Number(req.params.id)) {
      const orders = await Order.findAll({
        where: {
          userId: req.params.id
        },
        include: [{model: Shoe, attributes: ['name', 'price']}, {model: User}]
      })
      res.json(orders)
    }
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
