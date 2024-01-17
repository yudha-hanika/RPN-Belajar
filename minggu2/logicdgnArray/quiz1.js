/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  // Mendeklarasikan dua variabel
  let arrayO = 0;
  let arrayX = -1;
  // Memulai loop for untuk iterasi setiap elemen
  for (i = 0; i < arr.length; i++) {
    // Memeriksa apakah elemen arr[i] (elemen pada indeks i) mengandung karakter 'o' menggunakan metode includes().
    if (arr[i] == 'o') {
      arrayX = i;
      // Jika kondisi pada baris 4 salah (elemen arr[i] tidak mengandung 'o'), lanjutkan memeriksa apakah seluruh array tidak mengandung 'x' menggunakan !arr.includes('x').
    } else if (!arr.includes('x')) {
      return 0;
    } else if (arr[i] == 'x') {
      arrayO = i;
      break;
    }
  }
  return Math.abs(arrayO - arrayX);
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
