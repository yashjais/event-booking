const express = require('express')
const bookingsController = require('../app/controllers/bookingsController')

const router = express.Router()

router.get('/bookmarks', bookingsController.list)
router.post('/bookmarks', bookingsController.create)


module.exports = router