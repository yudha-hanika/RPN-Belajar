//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
for (let i = 0; i <= 100; i += 2) {
  if (i % 2 === 0) {
    console.log('kelipatan 2' + ' ' + i);
  }
}

console.log();

for (let j = 0; j <= 100; j += 5) {
  if (j % 5 === 0) {
    console.log('kelipatan 5' + ' ' + j);
  }
}

console.log();

for (let k = 0; k <= 100; k += 9) {
  if (k % 9 === 0) {
    console.log('kelipatan 9' + ' ' + k);
  }
}
