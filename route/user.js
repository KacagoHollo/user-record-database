const router = require('express').Router();
let User = require('../model/user')

router.get('/', async (req, res) => {
  let users = await User.find({name: new RegExp(req.query.name, "i")})
    .select(req.query.all ? null : 'name')
    .limit(req.query.limit)
    .sort(req.query.order_by ? 'name' : null)
  res.json(users)
})
  // })





  module.exports = router