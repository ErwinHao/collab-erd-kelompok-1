const books = [
  {
    noBuku: 1,
    judul: 'BUKU belajar',
    pengarang: 'PT. TESTING',
  },
  {
    noBuku: 2,
    judul: 'BUKU EXPRESS',
    pengarang: 'JNE',
  },
  {
    noBuku: 3,
    judul: 'BUKU SICEPAT',
    pengarang: 'JNT',
  },
  {
    noBuku: 4,
    judul: 'PAXEL',
    pengarang: 'TOKOHIJAU',
  },
];

exports.getBuku = (req, res) => {
  return res.status(200).json({
    success: true,
    books,
  });
};

exports.postBuku = (req, res) => {
  const judul = req.body.judul;
  const pengarang = req.body.pengarang;
  let data = books[books.length - 1].noBuku + 1;

  const params = {
    noBuku: data,
    judul,
    pengarang,
  };

  books.push(params);

  return res.status(201).json({
    success: true,
    params,
  });
};

exports.putBuku = (req, res) => {
  const judul = req.body.judul;
  const pengarang = req.body.pengarang;

  const params = { judul, pengarang };

  const noBuku = req.params.nim;

  const fetchedBooks = books.find((i) => i.noBuku === noBuku);

  const updated = { ...fetchedBooks, ...params };

  return res.status(200).json({
    success: true,
    updated,
  });
};

exports.deleteBuku = (req, res) => {
  const no = +req.params.noBuku;

  const deleted = books.filter((buku) => buku.noBuku === no);

  return res.status(200).json({
    success: true,
    message: `Deleted ${deleted[0].judul} from data!`,
    deleted,
  });
};
