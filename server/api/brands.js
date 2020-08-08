const router = require('express').Router()
const {Brand} = require('../db/models')
const {Shoe} = require('../db/models')

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
