//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  const alfabet = 'abcdefghijklmnopqrstuvwxyz';

  // Buat variabel untuk menyimpan hasil
  let hasil = '';

  // Iterasi setiap huruf dalam kata
  for (let i = 0; i < kata.length; i++) {
    // Cari indeks huruf dalam alfabet
    const huruf = alfabet.indexOf(kata[i]);

    // Jika indeks huruf tidak ditemukan, berarti huruf tersebut adalah huruf Z
    if (huruf === -1) {
      // Ubah huruf menjadi huruf A
      hasil += alfabet[0];
    } else {
      // Ubah huruf menjadi huruf setelahnya
      hasil += alfabet[huruf + 1];
    }
  }

  // Kembalikan hasil
  return hasil;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
