function Partition(array, low, high, order) {
  let pivot = array[high];
  let i = low - 1;

  if (order == 1) {
    // Ascending order
    for (let j = low; j < high; j++) {
      if (array[j] <= pivot) {
        i++;
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  } else {
    // Descending order
    for (let j = low; j < high; j++) {
      if (array[j] >= pivot) {
        i++;
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  let temp = array[i + 1];
  array[i + 1] = array[high];
  array[high] = temp;
  return i + 1;
}

function QuickSort(array, low = 0, high = null, order = 1) {
  if(!Array.isArray(array)) throw "Given input is not an array"
  if (array.length <= 1) return array;
  if (order == 1 || order == -1) {
    if (high === null) {
      high = array.length - 1;
    }
    if (low < high) {
      let pivot_index = Partition(array, low, high, order);
      QuickSort(array, low, pivot_index - 1, order);
      QuickSort(array, pivot_index + 1, high, order);
    }
    return array;
  } else {
    throw "Invalid order value. Use 1 for ascending and -1 for descending.";
  }
}

module.exports = QuickSort;
