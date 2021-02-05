const express = require('express');
const router = express.Router();

const {
    getKap,
    postKap,
    putKap,
    deleteKap,
} = require('../controllers/kapController');

router.get('/kap', getMahasiswa);
router.post('/kap', postMahasiswa);
router.put('/kap/:nim', putMahasiswa);
router.delete('/kap/:nim', deleteMahasiswa);

module.exports = router;
