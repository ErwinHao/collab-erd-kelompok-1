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
router.put('/buku/:noBuku', putMahasiswa);
router.delete('/mahasiswa/:noBuku', deleteMahasiswa);

module.exports = router;