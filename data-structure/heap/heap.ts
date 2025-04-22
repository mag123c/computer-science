import { TreeNode } from "../common/treeNode";

export abstract class Heap {
  constructor(protected heap: TreeNode[] = [], protected size: number = 0) {
    this.heap = heap;
    this.size = size;
  }
  abstract insert(treeNode: TreeNode): void;
  abstract remove(): TreeNode | null;
  abstract heapifyUp(index?: number): void;
  abstract heapifyDown(index?: number): void;

  isEmpty(): boolean {
    return this.size === 0;
  }

  clear(): void {
    this.heap = [];
    this.size = 0;
  }

  peek(): TreeNode | null {
    return this.isEmpty() ? null : this.heap[0];
  }

  protected swap(TreeNode1: TreeNode, TreeNode2: TreeNode): void {
    const temp = TreeNode1.value;
    TreeNode1.value = TreeNode2.value;
    TreeNode2.value = temp;
  }
}
