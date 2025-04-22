import { Heap } from "./heap";

export class PriorityQueue<T> extends Heap<T> {
  constructor(comparator: (a: T, b: T) => number) {
    super(comparator);
  }

  enqueue(item: T): void {
    this.insert(item);
  }

  dequeue(): T | null {
    return this.remove();
  }
}
