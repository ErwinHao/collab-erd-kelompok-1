const express = require('express');
const router = express.Router();

const {
  getMahasiswa,
  postMahasiswa,
  putMahasiswa,
  deleteMahasiswa,
} = require('../controllers/mahasiswaController');

router.get('/mahasiswa', getMahasiswa);
router.post('/mahasiswa', postMahasiswa);
router.put('/mahasiswa/:nim', putMahasiswa);
router.delete('/mahasiswa/:nim', deleteMahasiswa);

module.exports = router;
