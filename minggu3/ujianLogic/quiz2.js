/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here

  // Inisialisasi array hasil
  let hasil = [];

  for (let i = 0; i < arrPenumpang.length; i++) {
    let penumpang = arrPenumpang[i];
    let naikDari = penumpang[1];
    let tujuan = penumpang[2];

    let indekNaikDari = rute.indexOf(naikDari);
    let indekTujuan = rute.indexOf(tujuan);

    // Hitung biaya
    let jarak = Math.abs(indekTujuan - indekNaikDari);
    let bayar = jarak * 2000;

    // Buat objek penumpang
    let objekPenumpang = {
      penumpang: penumpang[0],
      naikDari: naikDari,
      tujuan: tujuan,
      bayar: bayar,
    };

    // Tambahkan objek penumpang ke hasil
    hasil.push(objekPenumpang);
  }

  return hasil;
}

//TEST CASE
console.log(
  naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B'],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
