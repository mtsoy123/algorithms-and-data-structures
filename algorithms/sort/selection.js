const swap = (arr, idx1, idx2) => {
  return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}


function selection(arr) {
  let smallestIndex

  for (let i = 0; i < arr.length; i++) {
    smallestIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallestIndex] > arr[j]) {
        smallestIndex = j
      }
    }

    if (i !== smallestIndex) {
      swap(arr, smallestIndex, i)
    }
  }
  return arr;
}
