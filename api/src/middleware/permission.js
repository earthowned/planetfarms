const permit = (role) => {
  return (req, res, next) => {
    if (req.user.role === role) {
      next()
    } else {
      res.json({ error: 'Sorry, You don\'t have permission' })
    }
  }
}

module.exports = permit
