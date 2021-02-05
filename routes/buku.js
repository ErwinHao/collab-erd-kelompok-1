const express = require('express');
const router = express.Router();

const {
  getBuku,
  postBuku,
  putBuku,
  deleteBuku,
} = require('../controllers/bukuController');

router.get('/buku', getBuku);
router.post('/buku', postBuku);
router.put('/buku/:noBuku', putBuku);
router.delete('/buku/:noBuku', deleteBuku);

module.exports = router;
