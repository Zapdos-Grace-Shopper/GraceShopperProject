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

router.put('/:id', async (req, res, next) => {
  try {
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
  } catch (e) {
    next(e)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    if (req.user && req.user.access === 'admin') {
      await User.destroy({
        where: {
          id: req.params.id
        }
      })
      res.sendStatus(201)
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

router.put('/:id/cart', async (req, res, next) => {
  try {
    const userId = req.params.id
    console.log('req.body', req.body)
    req.body.quantArr.map(async update => {
      let shoe = await Shoe.findByPk(update.shoeId)
      await shoe.update({quantity: update.quantity})
    })

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
