const mahasiswa = [
  {
    nim: 1,
    namaMhs: {
      namaDpn: 'Erwin',
      namaTgh: '',
      namaBlkg: 'Hartanto',
    },
    alamatMhs: 'Jl. antahberantah No.36',
  },
  {
    nim: 2,
    namaMhs: {
      namaDpn: 'William',
      namaTgh: '',
      namaBlkg: 'Wijaya',
    },
    alamatMhs: 'Jl. tidakadajalan No.42',
  },
  {
    nim: 3,
    namaMhs: {
      namaDpn: 'Felix',
      namaTgh: '',
      namaBlkg: 'Hartanto',
    },
    alamatMhs: 'Jl. buntu no.99',
  },
];

// GET All Mahasiswa

exports.getMahasiswas = (req, res) => {
  return res.status(200).json({
    success: true,
    mahasiswa,
  });
};

// GET One Mahasiswa

exports.getMahasiswa = (req, res) => {
  const nim = +req.params.nim;

  const fetchedMhs = mahasiswa.find((mhs) => mhs.nim === nim);

  return res.status(200).json({
    success: true,
    fetchedMhs,
  });
};

// POST Mahasiswa

exports.postMahasiswa = (req, res) => {
  // const namaMhs = req.body.namaMhs;
  // const alamatMhs = req.body.alamatMhs;

  const { namaMhs, alamatMhs } = req.body;
  let nim = mahasiswa[mahasiswa.length - 1].nim + 1;

  const params = {
    nim,
    namaMhs,
    alamatMhs,
  };

  mahasiswa.push(params);

  return res.status(201).json({
    success: true,
    params,
  });
};

// PUT Mahasiswa

exports.putMahasiswa = (req, res) => {
  // const namaMhs = req.body.namaMhs;
  // const alamatMhs = req.body.alamatMhs;

  const { namaMhs, alamatMhs } = req.body;

  const params = { namaMhs, alamatMhs };

  const nim = req.params.nim;

  const fetchedMhs = mahasiswa.find((i) => i.nim === nim);

  const updated = { ...fetchedMhs, ...params };

  return res.status(200).json({
    success: true,
    updated,
  });
};

// DELETE Mahasiswa

exports.deleteMahasiswa = (req, res) => {
  const nim = +req.params.nim;

  const deleted = mahasiswa.filter((mhs) => mhs.nim === nim);

  return res.status(200).json({
    success: true,
    message: `Deleted ${deleted[0].namaMhs.namaDpn} from data!`,
    deleted,
  });
};
