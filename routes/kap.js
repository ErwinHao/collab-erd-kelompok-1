const express = require('express');
const router = express.Router();

const {
  getKap,
  postKap,
  putKap,
  deleteKap,
} = require('../controllers/kapController');

router.get('/kap', getKap);
router.post('/kap', postKap);
router.put('/kap/:nim', putKap);
router.delete('/kap/:nim', deleteKap);

module.exports = router;
