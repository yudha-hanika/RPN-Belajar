//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

// let word = 'JavaScript';
// let second = 'is';
// let third = 'awesome';
// let fourth = 'and';
// let fifth = 'I';
// let sixth = 'love';
// let seventh = 'it!';

//code here
let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';
// ---------------------------------------
// console.log(`${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`);
console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);

console.log('');
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word1 = 'wow JavaScript is so cool';
let firstWord = word1[0] + word1[1] + word1[2];
let secondWord = word1[4] + word1[5] + word1[6] + word1[7] + word1[8] + word1[9] + word1[10] + word1[11] + word1[12] + word1[13];
let threeWord = word1[15] + word1[16];
let fourWord = word1[18] + word1[19];
let fiveWord = word1[21] + word1[22] + word1[23] + word1[24];

// ---------------------------------------
console.log('First Word: ' + firstWord);
console.log('Second Word: ' + secondWord);
console.log('Three Word: ' + threeWord);
console.log('Four Word: ' + fourWord);
console.log('Five Word: ' + fiveWord);

console.log('');
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let FirstWord3 = word3.substring(0, 3);
let secondWord3 = word3.substring(4, 14);
let threeWord3 = word3.substring(15, 17);
let fourWord3 = word3.substring(18, 21);
let fiveWord3 = word3.substring(21, 25);

// ---------------------------------------
console.log('First Word: ' + FirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Three Word: ' + threeWord3);
console.log('Four Word: ' + fourWord3);
console.log('Five Word: ' + fiveWord3);

console.log('');
// ---------------------------------------

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = 'wow JavaScript is so cool';
let firstWord4 = word4.substring(0, 3);
let firstWordLength = firstWord4.length;

let secondWord4 = word4.substring(4, 14);
let secondWordLength = secondWord4.length;

let threeWord4 = word4.substring(15, 17);
let threeWordLength = threeWord4.length;

let fourWord4 = word4.substring(18, 20);
let fourWordLength = fourWord4.length;

let fiveWord4 = word4.substring(21, 25);
let fiveWordLength = fiveWord4.length;

console.log('First Word: ' + firstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('Three Word: ' + threeWord4 + ', with length: ' + threeWordLength);
console.log('Four Word: ' + fourWord4 + ', with length: ' + fourWordLength);
console.log('Five Word: ' + fiveWord4 + ', with length: ' + fiveWordLength);
