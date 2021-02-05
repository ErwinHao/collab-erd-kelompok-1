const express = require('express');

const app = express();

const mhsRoutes = require('./routes/mahasiswa');
const kapRoutes = require('./routes/kap');

app.use(express.json());

app.use(mhsRoutes);
app.use(kapRoutes);

app.listen(3000);
