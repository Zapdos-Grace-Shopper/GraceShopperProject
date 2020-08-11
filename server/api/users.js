const router = require('express').Router()
const {User, Order, Shoe} = require('../db/models')
module.exports = router

const areYouAdmin = (req, res, next) => {
  const currentUser = req.user
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
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', areYouAdmin, async (req, res, next) => {
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
    res.json(user)
  } catch (e) {
    next(e)
  }
})

router.post('/', areYouAdmin, async (req, res, next) => {
  try {
    const {email, firstname, lastname, password, shoeSize, imageURL} = req.body
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
  } catch (e) {
    next(e)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    if (req.user && Number(req.user.id) === Number(req.params.id)) {
      const {firstname, lastname, email, shoeSize} = req.body
      const [num, affected] = await User.update(
        {
          firstname,
          lastname,
          email,
          shoeSize
        },
        {
          where: {
            id: req.params.id
          },
          returning: true
        }
      )
      res.json(affected[0])
    }
  } catch (e) {
    next(e)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(201)
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

router.put('/:id/cart', async (req, res, next) => {
  try {
    const userId = req.params.id

    let shoe = await Shoe.findByPk(update.shoeId)
    await shoe.update({quantity: update.quantity})

    const updatedOrder = await Order.findOne({
      where: {userId: userId, status: 'cart'},
      include: {model: Shoe}
    })
    res.json(updatedOrder)
  } catch (error) {
    next(error)
  }
})

router.put('/:id/cart/checkout/complete', async (req, res, next) => {
  try {
    const userId = req.params.id
    let order = await Order.findOne({
      where: {userId: userId, status: 'cart'},
      include: {model: Shoe}
    })
    await order.update({status: 'complete'})

    const shoeIDs = order.shoes.map(shoe => shoe.id)
    shoeIDs.map(async shoeID => {
      let findShoe = await Shoe.findByPk(shoeID)
      const updateInventory =
        Number(findShoe.inventory) - Number(findShoe.quantity)
      await findShoe.update({inventory: updateInventory, quantity: 0})
    })
    res.json('updated shoe quantity and cart status')
  } catch (err) {
    next(err)
  }
})
