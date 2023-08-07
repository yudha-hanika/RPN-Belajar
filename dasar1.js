// buat variabel
var a = 'a';
var b = 'b';
var c = 'c';

// variabel bisa menampung tipe data string(text), integer/number, boolean, array, object
let nama = 'yudha'; // string
let umur = 19; // number
let apakahBenar = true; // boolean
let uang = 5000.5; //number tapi ada koma

// operator aritmatika
let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2);
console.log(angka1 - angka2);
console.log(angka1 / angka2);
console.log(angka1 * angka2);
console.log(angka1 % angka2);

// belajar mengisi variabel
let hasilOperatorAritmatika = angka1 + angka2;
console.log(hasilOperatorAritmatika); // 30

hasilOperatorAritmatika = angka1 - angka2;
console.log(hasilOperatorAritmatika); // -10

hasilOperatorAritmatika = angka1 / angka2;
console.log(hasilOperatorAritmatika); // 0.5

hasilOperatorAritmatika = angka1 * angka2;
console.log(hasilOperatorAritmatika); // 200

hasilOperatorAritmatika = angka1 % angka2;
console.log(hasilOperatorAritmatika); //10

// string juga bisa ditambah namun string gk bisa dikurangi dengan operator aritmatika
let firstName = 'yudha';
let lastName = 'hanika';
let fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(firstName + ' ' + lastName);
console.log(firstName - lastName); // NaN, karena dia bukan angka (bukan eror)

// alur pembacaan code
// untuk membaca code kalian harus membacanya dari kiri ke kanan dan atas ke kiri

let number = 20;
console.log(number + 10); // 30
number = 10;
console.log(number + 10); // 20
number = false;
console.log(number + 10); // 10

// pertanyaan? kenapa false - 10 tetap menjadi 10? karena false - 0, true - 1;
console.log(true + 10);

// membaca eror
// cth
const hewan = 'jerapah';
console.log(hewan);
hewan = 'buaya'; // eror karena variabel const, variabel const adalah constant aratinya tidak bisa diubah
