const kap = [
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
            namaDpn: 'Erwin',
            namaTgh: '',
            namaBlkg: 'Ramadhan',
        },
        alamatMhs: 'Jl. nonono',
    },
];

exports.getKap = (req, res) => {
    return res.status(200).json({
        success: true,
        kap,
    });
};

exports.postKap = (req, res) => {
    const namaMhs = req.body.namaMhs;
    const alamatMhs = req.body.alamatMhs;
    let rand = kap[kap.length - 1].nim + 1;

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

exports.putKap = (req, res) => {
    const newNama = req.body.namaMhs;
    const newAlamat = req.body.alamatMhs;

    const params = { namaMhs: newNama, alamatMhs: newAlamat };

    const nim = req.params.nim;

    const fetchedMhs = kap.find((i) => i.nim === nim);

    const updated = { ...fetchedMhs, ...params };

    return res.status(200).json({
        success: true,
        updated,
    });
};

exports.deleteKap = (req, res) => {
    const nim = +req.params.nim;

    const deleted = kap.filter((mhs) => mhs.nim === nim);

    return res.status(200).json({
        success: true,
        message: `Deleted ${deleted[0].namaMhs.namaDpn} from data!`,
        deleted,
    });
};