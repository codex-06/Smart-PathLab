const express = require('express');
const router = express.Router();


// Define routes for user management
router.get('/', (req, res) => {
  res.send('User list page.');
});




module.exports = router;