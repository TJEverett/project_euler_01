import { fibonacci } from './../src/even_fibonacci'
import { divisorFilter } from './../src/even_fibonacci'

describe('even_fibonacci', () => {
  test('should correctly create an array of fibonacci numbers', () => {
    const fibonacciArray = fibonacci(100);
    expect(fibonacciArray).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89])
  });

  test('should correctly return an array of numbers divisible by inputted number from inputted array', () => {
    const fibonacciArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    const evenArray = divisorFilter(2, fibonacciArray);
    expect (evenArray).toEqual([0, 2, 8, 34]);
  });
});