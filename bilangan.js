const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findLargest(num1, num2, num3) {
    let largest = num1;

    if (num2 > largest) {
        largest = num2;
    }
    if (num3 > largest) {
        largest = num3;
    }
    return largest;
}

rl.question('Masukkan angka pertama: ', (input1) => {
    const num1 = parseInt(input1);

    rl.question('Masukkan angka kedua: ', (input2) => {
        const num2 = parseInt(input2);

        rl.question('Masukkan angka ketiga: ', (input3) => {
            const num3 = parseInt(input3);

            console.log('Bilangan terbesar adalah: ' + findLargest(num1, num2, num3));
            rl.close();
        });
    });
});
