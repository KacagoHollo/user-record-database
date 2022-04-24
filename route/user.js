const router = require('express').Router();
// let User = require('../model/user')

router.get('/', (req, res) => {
    res.send('Users')
  })

  module.exports = router