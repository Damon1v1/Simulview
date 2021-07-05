const express = require('express');
const router = express.Router();

// Getting all Users and Creating one

router
  .get('/', (req, res) => {
  res.send('Get all user')
  })
  .post('/', (req, res) => {
  res.send('Creating one user')
  })


// Getting, Updating, Deleting one User
router
  .get('/:id', (req, res) => {
  res.send(req.params.id)
  })
  .patch('/:id', (req, res) => {
  res.send(req.params.id)
  })
  .delete('/:id', (req, res) => {
    res.send(req.params.id)
  })


module.exports = router;