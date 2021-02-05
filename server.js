const express = require('express');

const app = express();

const mhsRoutes = require('./routes/mahasiswa');

app.use(express.json());

app.use(mhsRoutes);

app.listen(3000);
