const router = require('express').Router()
const {Order, Shoe, User} = require('../db/models')

module.exports = router

const areYouAdmin = (req, res, next) => {
  const currentUser = req.session.user
  if (currentUser && currentUser.access === 'admin') {
    next()
  } else {
    const error = new Error("You're not an admin so what's the tea?")
    error.status = 666
    next(error)
  }
}

router.get('/', areYouAdmin, async (req, res, next) => {
  try {
    const orders = await Order.findAll({
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
    if (req.user.id === orders[0].userId) {
      res.json(orders)
    }
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
