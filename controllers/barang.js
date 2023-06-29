const Barang = require('../models/Barang')

exports.addBarang = async (req, res) => {
    try {
      const barang = await new Barang(req.body).save()
      res.json({ status: 'ok', message: barang })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

exports.updateBarang = async (req, res) => {
    try {
      const barang = await Barang.findByIdAndUpdate(req.params.id, req.body)
      res.json({ status: 'ok' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

exports.getBarang = async (req, res) => {
    try {
      const barang = await Barang.find();
      res.json({ record: barang })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

exports.deleteBarang = async (req, res) => {
    try {
      await Barang.findByIdAndRemove(req.params.id);
      res.json({ status: 'ok' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }