import { MaxHeap } from "../maxHeap";
import { MinHeap } from "../minHeap";

describe("heap", () => {
  describe("minHeap", () => {
    it("heapify up when inserting a value", () => {
      const input = [10, 5, 20, 15, 8, 3, 12, 7, 1, 4];

      const minHeap = new MinHeap();
      input.forEach((v) => minHeap.insert({ value: v }));

      const expected = [...input].sort((a, b) => a - b);

      expect(minHeap.peek()?.value).toBe(Math.min(...input));

      const result: number[] = [];
      while (!minHeap.isEmpty()) {
        result.push(minHeap.remove()!.value);
      }

      expect(result).toEqual(expected);
    });
    it("heapify down when removing a value", () => {
      const input = [10, 5, 20, 15, 8, 3, 12, 7, 1, 4];

      const minHeap = new MinHeap();
      input.forEach((v) => minHeap.insert({ value: v }));

      const removeLength = input.length / 2;
      for (let i = 0; i < removeLength; i++) {
        minHeap.remove();
      }

      const expected = [...input]
        .sort((a, b) => a - b)
        .slice(removeLength, input.length);

      const result: number[] = [];
      while (!minHeap.isEmpty()) {
        result.push(minHeap.remove()!.value);
      }
      expect(result).toEqual(expected);
    });
  });

  describe("maxHeap", () => {
    it("heapify up when inserting a value", () => {
      const input = [10, 5, 20, 15, 8, 3, 12, 7, 1, 4];

      const maxHeap = new MaxHeap();
      input.forEach((v) => maxHeap.insert({ value: v }));

      const expected = [...input].sort((a, b) => b - a);

      expect(maxHeap.peek()?.value).toBe(Math.max(...input));

      const result: number[] = [];
      while (!maxHeap.isEmpty()) {
        result.push(maxHeap.remove()!.value);
      }

      expect(result).toEqual(expected);
    });
    it("heapify down when removing a value", () => {
      const input = [10, 5, 20, 15, 8, 3, 12, 7, 1, 4];

      const maxHeap = new MaxHeap();
      input.forEach((v) => maxHeap.insert({ value: v }));

      const removeLength = input.length / 2;
      for (let i = 0; i < removeLength; i++) {
        maxHeap.remove();
      }

      const expected = [...input]
        .sort((a, b) => b - a)
        .slice(removeLength, input.length);

      const result: number[] = [];
      while (!maxHeap.isEmpty()) {
        result.push(maxHeap.remove()!.value);
      }
      expect(result).toEqual(expected);
    });
  });
});
