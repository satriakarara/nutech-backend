const express = require('express')
const {
    addBarang,
    updateBarang,
    getBarang,
    deleteBarang
} = require('../controllers/barang')
const { authUser } = require('../middleware/auth')

const router = express.Router()

router.post('/barang', authUser, addBarang)
router.put('/barang/:id', authUser, updateBarang)
router.delete('/barang/:id', authUser, deleteBarang)
router.get('/barang', authUser, getBarang)

module.exports = router