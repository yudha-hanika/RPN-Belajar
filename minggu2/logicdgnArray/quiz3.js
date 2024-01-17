/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();

  let result = [];
  let groupAnimal = [];

  for (let i = 0; i < animals.length; i++) {
    let animal = animals[i];

    if (i === 0) {
      groupAnimal.push(animal);
    } else if (groupAnimal[0][0] !== animal[0]) {
      result.push(groupAnimal.slice());
      groupAnimal = [animal];
    } else {
      groupAnimal.push(animal);
    }
  }

  // Menambahkan hasil dari groupAnimal terakhir ke dalam result
  result.push(groupAnimal.slice());

  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
