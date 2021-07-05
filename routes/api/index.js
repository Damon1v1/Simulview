
const express = require('express');
const router = express.Router();
const userdataRouter = require('./userdata')

router.use('/userdata', userdataRouter)

router.use((req, res) => {
  res.sendFile(path.join(__direname, "../../client/build/index.js"))
})

module.exports = router