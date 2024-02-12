function cariMedian(arr) {
  // you can only write your code here!
  arr.sort((a, b) => a - b);

  const len = arr.length;
  const middle = Math.floor(len / 2);

  if (len % 2 === 0) {
    //hitung rata-rata dua nilai tengah
    return (median = (arr[middle - 1] + arr[middle]) / 2);
  } else {
    //ambil nilai tengah
    const median = arr[middle];
    return median;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
