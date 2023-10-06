// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

// menhitumg maju
let i = 0;

while (i <= 10) {
  console.log(`lopping pertama ${i}`);
  i++;
}

console.log('');

// menghitung mundur
let j = 10;

while (j >= 0) {
  console.log(`looping kedua ${j}`);
  j--;
}

// dalam looping ada yang namanya arah, kanan atau kiri, kiri itu pengurangan, kanan itu pertambahan
// hati2 akan infinite loop, atau loopnya tidak jalan
