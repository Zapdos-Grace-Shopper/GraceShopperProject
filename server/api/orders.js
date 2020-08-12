const router = require('express').Router()
const areYouAdmin = require('./utils')
const {Order, Shoe, User, Purchased} = require('../db/models')

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
    let shoe = await Shoe.findByPk(shoeId)

    // const updateQuant = Number(shoe.quantity) + 1
    // shoe = await shoe.update({quantity: updateQuant})

    const [order, created] = await Order.findOrCreate({
      where: {
        userId,
        status
      },
      include: {
        model: Shoe,
        Purchased
      }
    })

    if (order.shoes) {
      if (!order.shoes.some(el => el.id === shoeId)) {
        await order.addShoe(shoe)
      }
    }

    const myPurchase = await Purchased.findOne({
      where: {orderId: order.id, shoeId: shoe.id}
    })
    if (myPurchase) {
      let updateOrderQuantity = myPurchase.orderQuantity + 1
      await myPurchase.update({orderQuantity: updateOrderQuantity})
    }

    let [orderUpdate] = await Order.findOrCreate({
      where: {
        userId,
        status
      },
      include: {
        model: Shoe,
        Purchased
      }
    })

    res.json(orderUpdate)
  } catch (err) {
    next(err)
  }
})
