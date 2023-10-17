/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [
  ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
  ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
  ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
  ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun'],
];
/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

// contoh dari dari part 8
console.log('data siswa');
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (j === 0) {
      console.log(`Nomor ID : ${input[i][j]}`);
    } else if (j === 1) {
      console.log(`Nama Lengkap : ${input[i][j]}`);
    } else if (j === 2) {
      console.log(`TTL : ${input[i][j]}` + ' ' + `${input[j][3]}`);
    } else if (j === 4) {
      console.log(`Hobi : ${input[i][j]}`);
    }
  }
  console.log('');
}

console.log('---------------------------------');

function dataHandling(data) {
  for (let i = 0; i < data.length; i++) {
    console.log('Nomor ID: ' + data[i][0]);
    console.log('Nama Lengkap: ' + data[i][1]);
    console.log('TTL: ' + data[i][2] + ' ' + data[i][3]);
    console.log('Hobi: ' + data[i][4]);
    console.log();
  }
}

dataHandling(input);

console.log('-------------------------');

//pada soal yg kedua, kalian harus belajar method split secara mandiri, pada soal dibawah ini, method .split() cukup powerfull loh

let input1 = ['0001', 'Roman Alamsyah ', 'Bandar Lampung', '21/05/1989', 'Membaca'];

function dataHandling2(input1) {
  // memasukan beberapa nama menggunakan splice
  input1.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
  input1.splice(4, 4, 'Pria', 'SMA Internasional Metro');
  console.log(input1);
  const newSplit = input1[3].split('/');
  if (newSplit[1] === '5') console.log('Mei');
  console.log([newSplit[2], newSplit[0], newSplit[1]]);
  console.log(input1[1].slice(0, 15));
}

dataHandling2(input1);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
