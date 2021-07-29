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
  let authorize = false;
  role.forEach(el => {
      if(el === req.user.role) return authorize = true;
    })

    return authorize;
}

module.exports = permit
