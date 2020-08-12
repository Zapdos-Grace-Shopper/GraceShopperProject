const router = require('express').Router()
const {Brand} = require('../db/models')
const {Shoe} = require('../db/models')
const areYouAdmin = require('./utils')

module.exports = router

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

router.delete('/:id', areYouAdmin, async (req, res, next) => {
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
