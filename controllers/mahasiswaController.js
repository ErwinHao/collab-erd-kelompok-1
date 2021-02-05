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
];

exports.getMahasiswa = (req, res) => {
  return res.status(200).json({
    success: true,
    mahasiswa,
  });
};

exports.postMahasiswa = (req, res) => {
  const namaMhs = req.body.namaMhs;
  const alamatMhs = req.body.alamatMhs;
  let rand = mahasiswa[mahasiswa.length - 1].nim + 1;

  const params = {
    nim: rand,
    namaMhs,
    alamatMhs,
  };

  mahasiswa.push(params);

  return res.status(201).json({
    success: true,
    params,
  });
};

exports.putMahasiswa = (req, res) => {
  const newNama = req.body.namaMhs;
  const newAlamat = req.body.alamatMhs;

  const params = { namaMhs: newNama, alamatMhs: newAlamat };

  const nim = req.params.nim;

  const fetchedMhs = mahasiswa.find((i) => i.nim === nim);

  const updated = { ...fetchedMhs, ...params };

  return res.status(200).json({
    success: true,
    updated,
  });
};

exports.deleteMahasiswa = (req, res) => {
  const nim = +req.params.nim;

  const deleted = mahasiswa.filter((mhs) => mhs.nim === nim);

  return res.status(200).json({
    success: true,
    message: `Deleted ${deleted[0].namaMhs.namaDpn} from data!`,
    deleted,
  });
};
