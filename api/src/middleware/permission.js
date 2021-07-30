const permit = (role) => {
  return (req, res, next) => {
    if (checkRole(req, role)) {
      next()
    } else {
      res.json({ error: 'Sorry, You don\'t have permission' })
    }
  }
}

function checkRole (req, role) {
  return role.some(el => el === req.user.role)
}

module.exports = permit
