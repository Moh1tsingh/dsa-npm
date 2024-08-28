function MergeSort(array, order = 1) {
  if (!Array.isArray(array)) throw "Given input is not an array";
  if (array.length <= 1) return array;
  if (order != 1 && order != -1)
    throw "Invalid order value. Use 1 for ascending and -1 for descending.";
  let mid = array.length / 2;
  let leftHalf = array.slice(0, mid);
  let rightHalf = array.slice(mid);

  let sortedLeft = MergeSort(leftHalf, order);
  let sortedRight = MergeSort(rightHalf, order);

  return Merge(sortedLeft, sortedRight, order);
}

function Merge(left, right, order) {
  let result = [];
  let i = 0,
    j = 0;
  if (order == 1) {
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  } else {
    while (i < left.length && j < right.length) {
      if (left[i] > right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  }

  result.push(...left.slice(i));
  result.push(...right.slice(j));
  return result;
}

module.exports = MergeSort
