import { Heap } from "../heap";

describe("heap", () => {
  describe("minHeap", () => {
    it("heapify up when inserting a value", () => {
      const input = [10, 5, 20, 15, 8, 3, 12, 7, 1, 4];

      const minHeap = new Heap<number>((a, b) => a - b);
      input.forEach((v) => minHeap.insert(v));

      const expected = [...input].sort((a, b) => a - b);

      expect(minHeap.peek()).toBe(Math.min(...input));

      const result: number[] = [];
      while (!minHeap.isEmpty()) {
        result.push(minHeap.remove()!);
      }

      expect(result).toEqual(expected);
    });
    it("heapify down when removing a value", () => {
      const input = [10, 5, 20, 15, 8, 3, 12, 7, 1, 4];

      const minHeap = new Heap<number>((a, b) => a - b);
      input.forEach((v) => minHeap.insert(v));

      const removeLength = input.length / 2;
      for (let i = 0; i < removeLength; i++) {
        minHeap.remove();
      }

      const expected = [...input]
        .sort((a, b) => a - b)
        .slice(removeLength, input.length);

      const result: number[] = [];
      while (!minHeap.isEmpty()) {
        result.push(minHeap.remove()!);
      }
      expect(result).toEqual(expected);
    });
  });

  describe("maxHeap", () => {
    it("heapify up when inserting a value", () => {
      const input = [10, 5, 20, 15, 8, 3, 12, 7, 1, 4];

      const maxHeap = new Heap<number>((a, b) => b - a);
      input.forEach((v) => maxHeap.insert(v));

      const expected = [...input].sort((a, b) => b - a);

      expect(maxHeap.peek()).toBe(Math.max(...input));

      const result: number[] = [];
      while (!maxHeap.isEmpty()) {
        result.push(maxHeap.remove()!);
      }

      expect(result).toEqual(expected);
    });
    it("heapify down when removing a value", () => {
      const input = [10, 5, 20, 15, 8, 3, 12, 7, 1, 4];

      const maxHeap = new Heap<number>((a, b) => b - a);
      input.forEach((v) => maxHeap.insert(v));

      const removeLength = input.length / 2;
      for (let i = 0; i < removeLength; i++) {
        maxHeap.remove();
      }

      const expected = [...input]
        .sort((a, b) => b - a)
        .slice(removeLength, input.length);

      const result: number[] = [];
      while (!maxHeap.isEmpty()) {
        result.push(maxHeap.remove()!);
      }
      expect(result).toEqual(expected);
    });
  });
});
