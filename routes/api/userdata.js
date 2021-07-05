const express = require('express');
const router = express.Router();

// Getting all Users
router.get('/', (req, res) => {
  res.send('Get all user')
})

// Getting one User
router.get('/:id', (req, res) => {
  res.send(req.params.id)
})

 
// Creating a User
router.post('/', (req, res) => {
  res.send('Creating one user')
})


// Updating a User
router.patch('/:id', (req, res) => {
  res.send(req.params.id)
})


// Deleting a User
router.delete('/:id', (req, res) => {
  res.send(req.params.id)
})


module.exports = router;