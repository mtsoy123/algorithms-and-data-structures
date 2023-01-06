class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp(this.values)
  }

  swap(arr, idx1, idx2) {
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  bubbleUp(values) {

    let index = values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    const element = this.values[index];
    let parent = values[parentIndex];

    while (index > 0) {
      if (element > parent) {
        this.swap(values, parentIndex, index)
        index = parentIndex;
      }
      parentIndex = Math.floor((index - 1) / 2);
    }

    return this
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    this.sinkDown();
    return max
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break
      this.values[index] = this.values[swap]
      this.values[swap] = element;
      index = swap;
    }
  }
}
