const express = require('express')
const {
    login
} = require('../controllers/user')
const { authUser } = require('../middleware/auth')

const router = express.Router()

router.post('/login', login)

module.exports = router