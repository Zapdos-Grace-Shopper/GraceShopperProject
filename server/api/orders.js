const router = require('express').Router()
const {Order, Shoe, User, Purchased} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
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
