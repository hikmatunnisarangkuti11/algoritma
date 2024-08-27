const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const hargaeksemplar = 5000

rl.question('Jumlah Buku yang dibeli:', (jumlahbuku) => {
    let jumlahBuku = parseInt(jumlahbuku)
    let eksemplar = jumlahBuku * 10
    let totalHarga = 0
    let diskonInfo = ''

    if (eksemplar <= 100) {
        totalHarga = eksemplar * hargaeksemplar;
        diskonInfo = `Diskon: 0% \nTotal harga: Rp ${totalHarga}`;
    } else if (eksemplar <= 200) {
        const sisaeksemplar = eksemplar - 100;
        const harga100eksemplar = 100 * hargaeksemplar;
        const diskon1 = harga100eksemplar * 0.95;
        const hargaSisa = sisaeksemplar * hargaeksemplar;
        const diskon2 = hargaSisa * 0.85;
        totalHarga = diskon1 + diskon2;
        diskonInfo = `Diskon: \n- 5% untuk 100 eksemplar pertama (Rp ${diskon1}) \n- 15% untuk eksemplar sisanya (Rp ${diskon2}) \nTotal harga: Rp ${totalHarga}`;
    } else {
        const sisa2 = eksemplar - 200;
        const harga100eksemplar1 = 100 * hargaeksemplar;
        const diskon3 = harga100eksemplar1 * 0.93;
        const harga100eksemplar2 = 100 * hargaeksemplar;
        const diskon4 = harga100eksemplar2 * 0.83;
        const hargaSisa = sisa2 * hargaeksemplar;
        const diskon5 = hargaSisa * 0.73;
        totalHarga = diskon3 + diskon4 + diskon5;
        diskonInfo = `Diskon: \n- 7% untuk 100 eksemplar pertama (Rp ${diskon3}) \n- 17% untuk 100 eksemplar kedua (Rp ${diskon4}) \n- 27% untuk eksemplar sisanya (Rp ${diskon5}) \nTotal harga: Rp ${totalHarga}`;
    }

    console.log(diskonInfo);
    rl.close();
});
