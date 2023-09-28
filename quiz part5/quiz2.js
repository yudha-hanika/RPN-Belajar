// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, month, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, month 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let month = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let day = 13; // assign nilai variabel day disini! (dengan angka antara 1 - 31)
let month = 'Des'; // assign nilai variabel month disini! (dengan angka antara 1 - 12)
let year = 2003; // assign nilai variabel year disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini

switch (month) {
  case 'Jan':
    month = 'Jan';
    console.log(`${day} ${month} ${year}`);
    break;
  case 'Feb':
    month = 'Feb';
    console.log(`${day} ${month} ${year}`);
    break;
  case 'Mar':
    month = 'Mar';
    console.log(`${day} ${month} ${year}`);
    break;
  case 'Apr':
    month = 'Apr';
    console.log(`${day} ${month} ${year}`);
    break;
  case 'Mei':
    month = 'Mei';
    console.log(`${day} ${month} ${year}`);
    break;
  case 'Jun':
    month = 'Jun';
    console.log(`${day} ${month} ${year}`);
    break;
  case 'Jul':
    month = 'Jul';
    console.log(`${day} ${month} ${year}`);
    break;
  case 'Agu':
    month = 'Agu';
    console.log(`${day} ${month} ${year}`);
    break;
  case 'Sep':
    month = 'Sep';
    console.log(`${day} ${month} ${year}`);
    break;
  case 'Okt':
    month = 'Okt';
    console.log(`${day} ${month} ${year}`);
    break;
  case 'Nov':
    month = 'Nov';
    console.log(`${day} ${month} ${year}`);
    break;
  case 'Des':
    month = 'Des';
    console.log(`${day} ${month} ${year}`);
    break;
  default:
    console.log('masukan bln dengan benar');
}
