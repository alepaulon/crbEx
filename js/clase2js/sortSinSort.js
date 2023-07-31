// Ordenar el siguiente array sin usar sort: [3, 23, 11, 15, 6, 19, 32, 9]

let arr = [3, 23, 11, 15, 6, 19, 32, 9];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log("Array ordenado:", arr);