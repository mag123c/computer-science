import { TreeNode } from "../common/treeNode";
import { Heap } from "./heap";

export class MinHeap extends Heap {
  insert(treeNode: TreeNode): void {
    this.heap.push(treeNode);
    this.size++;
    this.heapifyUp();
  }

  remove(): TreeNode | null {
    if (this.isEmpty()) return null;

    this.swap(this.heap[0], this.heap[this.size - 1]);
    const removedNode = this.heap.pop();
    this.size--;
    this.heapifyDown(0);
    return removedNode ?? null;
  }

  heapifyUp(index: number = this.size - 1): void {
    if (index <= 0) return;
    const parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[index].value < this.heap[parentIndex].value) {
      this.swap(this.heap[index], this.heap[parentIndex]);
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(index: number = 0): void {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;

    if (left < this.size && this.heap[left].value < this.heap[smallest].value) {
      smallest = left;
    }

    if (
      right < this.size &&
      this.heap[right].value < this.heap[smallest].value
    ) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(this.heap[index], this.heap[smallest]);
      this.heapifyDown(smallest);
    }
  }
}
