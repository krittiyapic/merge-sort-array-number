import { describe, it, expect } from 'vitest';
import { merge } from '../src/function.js';


describe('Merge Sort Array', () => {
  it('Ascending sort array', () => {
    const result = merge(
      [9, 7, 5, 3, 1],
      [0, 2, 4, 6, 7],
      [1, 3, 8]
    );

    expect(result).toEqual([
      0, 1, 1, 2, 3, 3, 4, 5, 6, 7, 7, 8, 9
    ]);
  });

  it('Empty array', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([3, 2, 1], [], [])).toEqual([1, 2, 3]);
  });

  it('Duplicated number in array', () => {
    const result = merge(
      [5, 5, 3],
      [1, 5],
      [2, 3]
    );

    expect(result).toEqual([1, 2, 3, 3, 5, 5, 5]);
  });
});
