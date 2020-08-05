const router = require('express').Router()
const {Shoe} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const shoes = await Shoe.findAll()
    res.json(shoes)
  } catch (err) {
    next(err)
  }
})
