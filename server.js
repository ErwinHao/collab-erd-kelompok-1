const express = require('express');

const app = express();

const mhsRoutes = require('./routes/mahasiswa');
const bukuRoutes = require('./routes/buku');
const kapRoutes = require('./routes/kap');

app.use(express.json());

app.use(mhsRoutes);
app.use(bukuRoutes);
app.use(kapRoutes);

app.listen(3000);
