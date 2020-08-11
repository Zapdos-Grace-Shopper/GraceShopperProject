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
router.put('/:id', async (req, res, next) => {
  try {
    const targetShoe = await Shoe.findByPk(req.params.id)
    await targetShoe.update(req.body)
    res.json(targetShoe)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await Shoe.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {
      name,
      brand,
      price,
      imageURL,
      size,
      inventory,
      description
    } = req.body
    const findBrand = await Brand.findOne({
      where: {
        name: brand
      }
    })
    const newShoe = await Shoe.create({
      name,
      price,
      imageURL,
      size,
      inventory,
      description,
      brandId: findBrand.id
    })
    res.json(newShoe)
  } catch (err) {
    next(err)
  }
})
