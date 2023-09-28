let nilai = 80;

//console.log(nilai >= 50); // tergantung si nilainya, hasilnya antara true dan false

// if (nilai >= 50) {
//   // true or false
//   console.log('lulus');
// } else if (nilai >= 40) {
//   console.log('tdk lulus');
// } else {
//   console.log('tdk lulus bgt');
// }

if (nilai >= 80 && nilai <= 100) {
  nilai = 'A';
} else if (nilai >= 70 && nilai <= 80) {
  nilai = 'B';
} else if (nilai >= 60 && nilai <= 70) {
  nilai = 'C';
} else {
  nilai = 'remidi';
}

console.log(nilai);
nilai = 60;
// && semua kondisi harus terpenuhi lalu dia akan menghasilkan nilai true
// or salah satu kondisi harus terpenuhi lalu dia akan menghasilkan nilai true

let banding = nilai >= 80 && nilai <= 100; // antara true dan false
console.log(banding, '&&');
let banding2 = nilai >= 80 || nilai < 100; // antara true dan false
console.log(banding2, '||');
let banding3 = nilai != 50;
console.log(banding3, '!');

//  apa bedanya == dengan ===
let x = 50; // tipe data number
let y = '50'; // tipe data stirng

let banding4 = x == y;
console.log(banding4, '4');
let banding5 = x === y;
console.log(banding5, '5');
