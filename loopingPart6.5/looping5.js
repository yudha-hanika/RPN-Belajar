// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
//*
//**
//***
//****
//*****
for (let i = 10; i >= 0; i--) {
  let bintang = '';
  for (let j = 0; j <= i; j++) {
    bintang += '*';
  }
  console.log(bintang);
}
