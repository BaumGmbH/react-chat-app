const express = require('express');
const router = express.Router();

console.log("Init")
router.get('/', (req, res) => {
    console.log('Got request')
    res.send('Server is up and running');
});

module.exports = router;