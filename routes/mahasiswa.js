const express = require('express');
const router = express.Router();

const {
  getMahasiswas,
  postMahasiswa,
  putMahasiswa,
  deleteMahasiswa,
  getMahasiswa,
} = require('../controllers/mahasiswaController');

router.get('/mahasiswa', getMahasiswas);
router.get('/mahasiswa/:nim', getMahasiswa);
router.post('/mahasiswa', postMahasiswa);
router.put('/mahasiswa/:nim', putMahasiswa);
router.delete('/mahasiswa/:nim', deleteMahasiswa);

module.exports = router;
