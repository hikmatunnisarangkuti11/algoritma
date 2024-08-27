function thnkabisat(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function tahunkabisat(tahun, tahunakhir) {
    for (let year = tahun; year <= tahunakhir; year++) {
        if (thnkabisat(year)) {
            console.log(`${year} tahun kabisat.`);
        } 
        else if (year === 1700 || year === 1800) {
            console.log(`${year} bukan tahun kabisat.`);
        }
    }
}

let tahun = 1600;
let tahunakhir = 2024;

tahunkabisat(tahun, tahunakhir);
