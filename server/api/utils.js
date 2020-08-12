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

module.exports = areYouAdmin
