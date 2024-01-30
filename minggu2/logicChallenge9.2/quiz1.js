//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
  // you can only write your code here!

  if (angka <= 1) {
    return false;
  }

  // Mulai dari bilangan 2 hingga akar dari bilangan tersebut.
  for (let i = 2; i <= Math.sqrt(angka); i++) {
    // Cek apakah bilangan tersebut habis dibagi oleh bilangan tersebut.
    if (angka % i === 0) {
      return false;
    }
  }

  return true;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
