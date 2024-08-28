const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkWaterStatus(height) {
    if (height <= 500.0) {
        return 'Status: AMAN';
    } else if (height <= 600.0) {
        return 'Status: WASPADA';
    } else if (height <= 650.0) {
        return 'Status: SIAGA 2';
    } else {
        return 'Status: SIAGA 1';
    }
}

function askForHeight() {
    rl.question("Masukkan tinggi air (dalam meter): ", (input) => {
        let height = parseFloat(input);

        if (isNaN(height)) {
            console.log("Input tidak valid. Silakan masukkan angka.");
            askForHeight(); 
        } else {
            console.log(checkWaterStatus(height));
            rl.close();
        }
    });
}

askForHeight();
