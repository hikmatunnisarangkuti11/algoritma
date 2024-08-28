const readline = require('readline');
  
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan jumlah jam lembur: ', (input) => {
    const overtimeHours = Number(input);
    let overtimePay = 100000;

    if (overtimeHours === 6) {
        overtimePay = 200000;
    } else if (overtimeHours > 6) {
        overtimePay = 300000;
    }

    console.log(`Gaji lembur: Rp ${overtimePay}`);
    rl.close();
});