const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'firstname', 'lastname', 'email', 'shoeSize']
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
    console.log(req.user.id)
    const user = await User.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'firstname', 'lastname', 'email', 'shoeSize']
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
