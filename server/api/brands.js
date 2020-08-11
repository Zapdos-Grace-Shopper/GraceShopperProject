const router = require('express').Router()
const {Brand} = require('../db/models')
const {Shoe} = require('../db/models')

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

router.get('/', async (req, res, next) => {
  try {
    const brands = await Brand.findAll()
    res.json(brands)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const brand = await Brand.findByPk(id, {
      include: [{model: Shoe}]
    })
    res.json(brand)
  } catch (error) {
    next(error)
  }
})

router.post('/', areYouAdmin, async (req, res, next) => {
  try {
    const {name, imageURL, description} = req.body
    const brand = await Brand.create({
      name,
      imageURL,
      description
    })
    console.log(brand)
    res.json(brand)
  } catch (e) {
    next(e)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await Brand.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(201)
  } catch (err) {
    next(err)
  }
})
