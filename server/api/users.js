const router = require('express').Router()
const {User, Order, Shoe, Purchased} = require('../db/models')
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
    if (
      req.user &&
      (Number(req.user.id) === Number(req.params.id) ||
        req.user.access === 'admin')
    ) {
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

router.delete('/:id', areYouAdmin, async (req, res, next) => {
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

// need to also eager load the purchased table here -- check if exists first
router.get('/:id/cart', async (req, res, next) => {
  try {
    const userId = req.params.id
    let order = await Order.findOne({
      where: {userId: userId, status: 'cart'},
      include: {model: Shoe}
    })

    if (
      req.user &&
      (Number(req.user.id) === Number(userId) || req.user.access === 'admin')
    ) {
      if (order) {
        // const myPurchase = await Purchased.findOne({
        //   where: {orderId: order.id},
        // })

        order = await Order.findOne({
          where: {userId: userId, status: 'cart'},
          include: {model: Shoe, Purchased}
        })

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
    // req.body.quantityUpdate = (1) or (-1)
    const userId = req.params.id
    const {shoeId, quantityUpdate} = req.body

    let order = await Order.findOne({
      where: {userId, status: 'cart'}
    })
    const myPurchase = await Purchased.findOne({
      where: {orderId: order.id, shoeId: shoeId}
    })
    let updateOrderQuantity =
      Number(myPurchase.orderQuantity) + Number(quantityUpdate)
    await myPurchase.update({orderQuantity: updateOrderQuantity})

    let orderUpdate = await Order.findOne({
      where: {userId, status: 'cart'},
      include: {
        model: Shoe,
        Purchased
      }
    })
    res.json(orderUpdate)
  } catch (error) {
    next(error)
  }
})

router.put('/:id/cart/checkout/complete', async (req, res, next) => {
  try {
    const userId = req.params.id
    let order = await Order.findOne({
      where: {userId: userId, status: 'cart'},
      include: {model: Shoe, Purchased}
    })
    await order.update({status: 'complete'})

    const shoeIDs = order.shoes.map(shoe => shoe.id)

    shoeIDs.map(async shoeID => {
      let findShoe = await Shoe.findByPk(shoeID)
      const myPurchase = await Purchased.findOne({
        where: {orderId: order.id, shoeId: shoeID}
      })
      const updateInventory =
        Number(findShoe.inventory) - Number(myPurchase.orderQuantity)
      await findShoe.update({inventory: updateInventory})
    })
    res.json('updated shoe quantity and cart status')
  } catch (err) {
    next(err)
  }
})

//update quantity of a single shoe instead of mapping through an array to find the single shoe?
router.put('/:id/cart/checkout/complete', async (req, res, next) => {
  try {
    const userId = req.params.id
    const [, [updatedShoe]] = await Shoe.update(req.body, {
      returning: true,
      where: {id: id}
    })
  } catch (err) {
    next(err)
  }
})

/*
router.put('/articles/:id', async (req, res, next) => {
  try{
    const id = req.params.id;
    //const {title} = req.body;
    const [,[updated]] = await Article.update(req.body, {returning: true, where: {id: id}})

    if(!updated){
      res.status(500).send("What is this!")
    }
    else{
      res.json({
        message: 'Updated successfully',
        article: updated
      })
    }
  }
  catch(error){
    next(error)
  }
}
*/
