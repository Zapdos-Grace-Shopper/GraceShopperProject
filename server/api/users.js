const router = require('express').Router()
const {User, Order, Shoe} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: [
        'id',
        'firstname',
        'lastname',
        'email',
        'shoeSize',
        'imageURL',
        'access'
      ]
    })
    if (req.user && req.user.access === 'admin') {
      res.json(users)
    } else {
      res.sendStatus(401)
    }
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'firstname',
        'lastname',
        'email',
        'shoeSize',
        'imageURL'
      ]
    })
    if (req.user && req.user.access === 'admin') {
      res.json(user)
    } else {
      res.sendStatus(401)
    }
  } catch (e) {
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  try {
    if (req.user && req.user.access === 'admin') {
      const {
        email,
        firstname,
        lastname,
        password,
        shoeSize,
        imageURL
      } = req.body
      const user = await User.create({
        email,
        firstname,
        lastname,
        password,
        access: 'user',
        shoeSize,
        imageURL
      })
      res.json(user)
    } else {
      res.sendStatus(401)
    }
  } catch (e) {
    next(e)
  }
})

//cart routes
router.get('/:id/cart', async (req, res, next) => {
  try {
    const userId = req.params.id
    const order = await Order.findOne({
      where: {userId: userId, status: 'cart'},
      include: {model: Shoe}
    })
    if (
      req.user &&
      (Number(req.user.id) === Number(userId) || req.user.access === 'admin')
    ) {
      if (order) {
        res.json(order)
      } else {
        res.json('the cart is currently empty')
      }
    } else {
      res.sendStatus(401)
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/:id/cart', async (req, res, next) => {
  try {
    const userId = req.params.id
    const {shoeId} = req.body
    const order = await Order.findOne({
      where: {userId: userId, status: 'cart'}
    })
    const shoe = await Shoe.findByPk(shoeId)
    await order.removeShoe(shoe)
    const updatedOrder = await Order.findOne({
      where: {userId: userId, status: 'cart'},
      include: {model: Shoe}
    })
    res.json(updatedOrder)
  } catch (err) {
    next(err)
  }
})

// router.put('/:id/cart', async (req, res, next) => {
//   try {
//     const userId = req.params.id
//     const order = await Order.findOne({
//       where: {userId: userId, status: 'cart'},
//       include: {model: Shoe}
//     })
//     req.body.quantity.map(update => {
//       let shoe = await Shoe.findByPk(update.shoeId)
//       await shoe.update({quantity: update.quantity})
//     }
//     )
//     const updatedOrder = await Order.findOne({
//       where: {userId: userId, status: 'cart'},
//       include: {model: Shoe}
//     })
//     res.json(updatedOrder)
//   } catch (error) {
//     next(error)
//   }
// })
// // for checkout page

// router.get('/:id/cart/checkout')
// load the order

// change order status to complete
// update shoe quantity
router.put('/:id/cart/checkout/complete', async (req, res, next) => {
  try {
    const userId = req.params.id
    const order = await Order.findOne(
      {
        where: {userId: userId, status: 'cart'}
      },
      {
        include: {
          model: Shoe,
          attributes: ['id', 'quantity']
        }
      }
    )
    await order.update({status: 'complete'})
    // await shoe.update(shoe.updateInventory(), )
    await order.shoes.map(shoe => shoe.updateInventory())
    const updatedOrder = await Order.findOne({
      where: {userId: userId, status: 'complete'},
      include: {model: Shoe}
    })
    res.json(updatedOrder)
  } catch (err) {
    next(err)
  }
})
