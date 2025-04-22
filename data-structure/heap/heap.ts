type Comparator<T> = (a: T, b: T) => number;

export class Heap<T> {
  protected heap: T[] = [];
  private comparator: Comparator<T>;

  constructor(comparator: Comparator<T>) {
    this.comparator = comparator;
  }

  insert(value: T): void {
    this.heap.push(value);
    this.heapifyUp();
  }

  remove(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    this.swap(0, this.heap.length - 1);
    const removedValue = this.heap.pop()!;
    this.heapifyDown();
    return removedValue;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  clear(): void {
    this.heap = [];
  }

  peek(): T | null {
    return this.isEmpty() ? null : this.heap[0];
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private heapifyUp(): void {
    let index = this.heap.length - 1;
    while (
      Math.floor((index - 1) / 2) >= 0 &&
      this.comparator(
        this.heap[Math.floor((index - 1) / 2)],
        this.heap[index]
      ) > 0
    ) {
      this.swap(Math.floor((index - 1) / 2), index);
      index = Math.floor((index - 1) / 2);
    }
  }

  private heapifyDown(): void {
    let index = 0;
    while (index * 2 + 1 < this.heap.length) {
      let smallerChildIndex = index * 2 + 1;
      if (
        index * 2 + 2 < this.heap.length &&
        this.comparator(this.heap[index * 2 + 2], this.heap[index * 2 + 1]) < 0
      ) {
        smallerChildIndex = index * 2 + 2;
      }
      if (this.comparator(this.heap[index], this.heap[smallerChildIndex]) < 0) {
        break;
      }
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}
