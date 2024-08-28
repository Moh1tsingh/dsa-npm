function BinarySearch(array, key) {
  if (!Array.isArray(array)) throw "Given input is not an array";
  array.sort((a, b) => a - b);
  let l = 0,
    h = array.length - 1;

  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (array[mid] === key) return mid;
    else if (array[mid] < key) {
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }
  return -1;
}

module.exports = BinarySearch;
