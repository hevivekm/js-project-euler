import { sumOfMultiplesOf3and5 } from './sumOfMultiplesOf3and5';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(sumOfMultiplesOf3and5()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(sumOfMultiplesOf3and5()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(sumOfMultiplesOf3and5()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(sumOfMultiplesOf3and5()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { sumOfMultiplesOf3and5(); }).toThrow();
 */

describe('sumOfMultiplesOf3and5', () => {
  it('sumOfMultiplesOf3and5 < 10 == 23', () => {
    expect(sumOfMultiplesOf3and5(10)).toEqual(23);
  });

  it('sumOfMultiplesOf3and5 < 1000 == 233168', () => {
    expect(sumOfMultiplesOf3and5(1000)).toEqual(233168);
  });
});
