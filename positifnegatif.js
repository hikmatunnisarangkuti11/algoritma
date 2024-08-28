const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkNumber(num) {
    let type = num > 0 ? 'Positif' : 'Negatif';
    let parity = num % 2 === 0 ? 'Genap' : 'Ganjil';

    return `Angka ${num} adalah ${type} dan ${parity}`;
}

function askForNumber() {
    rl.question("Masukkan sebuah angka (tidak nol): ", (input) => {
        let num = parseInt(input);

        if (num === 0) {
            console.log("Angka tidak boleh nol. Silakan coba lagi.");
            askForNumber(); 
        } else {
            console.log(checkNumber(num));
            rl.close();
        }
    });
}

askForNumber();
