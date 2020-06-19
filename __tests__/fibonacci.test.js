import { fibonacci } from './../src/even_fibonacci'

describe('even_fibonacci', () => {
  test('should correctly create an array of fibonacci numbers', () => {
    const fibonacciArray = fibonacci(100);
    console.log(fibonacciArray);
    expect(fibonacciArray).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89])
  });
});