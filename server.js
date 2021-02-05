const express = require('express');

const app = express();

const mhsRoutes = require('./routes/mahasiswa');
const bukuRoutes = require('./routes/buku');

app.use(express.json());

app.use(mhsRoutes);
app.use(bukuRoutes);
app.listen(3000);