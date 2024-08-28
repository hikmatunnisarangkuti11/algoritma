const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateTotalPrice(price1, price2, price3) {
    let total = price1 + price2 + price3;
    let discount = 0;
    let discountPercent = 0;

    if (total > 100000) {
        discountPercent = 10; 
        discount = total * (discountPercent / 100);
        total *= (1 - (discountPercent / 100)); 
    }

    return { total, discount, discountPercent };
}

function askForPrices() {
    rl.question("Masukkan harga barang pertama: ", (input1) => {
        let price1 = parseInt(input1);

        rl.question("Masukkan harga barang kedua: ", (input2) => {
            let price2 = parseInt(input2);

            rl.question("Masukkan harga barang ketiga: ", (input3) => {
                let price3 = parseInt(input3);

                let { total, discount, discountPercent } = calculateTotalPrice(price1, price2, price3);
                if (discount > 0) {
                    console.log(`Anda mendapatkan diskon: ${discountPercent}% (Rp ${discount.toFixed(2)})`);
                } else {
                    console.log("Tidak ada diskon yang diterapkan.");
                }
                console.log("Total harga yang harus dibayar adalah: Rp " + total.toFixed(2));
                rl.close();
            });
        });
    });
}

askForPrices();
