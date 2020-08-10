const router = require('express').Router()
const {Shoe, Brand, User} = require('../db/models')

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

router.get('/', async (req, res, next) => {
  try {
    const shoes = await Shoe.findAll({
      include: {model: Brand}
    })
    res.json(shoes)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const singleShoe = await Shoe.findByPk(req.params.id, {
      include: [{model: Brand, attribute: ['name']}]
    })
    res.send(singleShoe)
  } catch (err) {
    next(err)
  }
})

//updates individual shoe
router.put('/:id', areYouAdmin, async (req, res, next) => {
  try {
    const targetShoe = await Shoe.findByPk(req.params.id)
    await targetShoe.update(req.body)
    res.json(targetShoe)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', areYouAdmin, async (req, res, next) => {
  try {
    await Shoe.destroy({where: {id: req.params.id}})
    const shoes = await Shoe.findAll({
      include: {model: Brand}
    })
    res.json(shoes)
  } catch (err) {
    next(err)
  }
})

router.post('/', areYouAdmin, async (req, res, next) => {
  try {
    const newShoe = await Shoe.create(req.body)
    res.json(newShoe)
  } catch (err) {
    next(err)
  }
})
