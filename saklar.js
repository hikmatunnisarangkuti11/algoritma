const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan 0 untuk OFF atau 1 untuk ON: ", (input) => {
    if (input == 0 || input == 1) {
      const state = input === "0" ? "OFF" : "ON";
      console.log(`Saklar dalam posisi: ${state}`);
    } else {
      console.log("Input tidak valid. Silakan masukkan 0 atau 1.");
    }
    rl.close();
  });
