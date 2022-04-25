const router = require('express').Router();
let User = require('../model/user')

router.get('/', async (req, res) => {
  let users = await User.find({name: new RegExp(req.query.name, "i")})
    .select(req.query.all ? null : 'name')
    .limit(req.query.limit)
    .sort(req.query.order_by ? req.query.order_by : undefined)
  res.json(users)
})

router.get('/id/:id', async (req, res) => {
  let users = await User.find({id: Number(req.params.id, "i")})
  res.json(users)
})

router.get('/username/:username', async (req, res) => {
  let users = await User.find({username: new RegExp(`^${req.params.username}`, "i")})
  res.json(users)
})



  module.exports = router