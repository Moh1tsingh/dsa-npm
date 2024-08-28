function SelectionSort(array, order = 1) {
  if (!Array.isArray(array)) throw "Given input is not an array";
  if (array.length <= 1) return array;
  if (order == 1) {
    for (let i = 0; i < array.length; i++) {
      let min_index = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] > array[min_index]) {
          min_index = j;
        }
      }
      min_value = array.splice(min_index, 1);
      array.unshift(min_value[0]);
    }
    return array;
  } else if (order == -1) {
    for (let i = 0; i < array.length; i++) {
      let min_index = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min_index]) {
          min_index = j;
        }
      }
      min_value = array.splice(min_index, 1);
      array.unshift(min_value[0]);
    }
    return array;
  } else {
    throw "Invalid order value. Use 1 for ascending and -1 for descending.";
  }
}

module.exports = SelectionSort;
