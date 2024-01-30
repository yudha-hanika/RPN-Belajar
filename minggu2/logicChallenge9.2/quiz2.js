//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  // you can only write your code here!

  // Cek mana bilangan yang lebih kecil.
  let bilKecil = Math.min(angka1, angka2);
  let bilBesar = Math.max(angka1, angka2);

  // Mulai dari bilangan yang lebih kecil hingga bilangan 1.
  for (let i = bilKecil; i >= 1; i--) {
    // Jika bilangan yang lebih kecil habis dibagi oleh bilangan yang lebih besar, maka bilangan tersebut adalah FPB.
    if (angka1 % i === 0 && angka2 % i === 0) {
      return i;
    }
  }

  // Jika bilangan yang lebih kecil tidak habis dibagi oleh bilangan yang lebih besar, maka bilangan yang lebih besar adalah FPB.
  return bilBesar;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
