import { recursiveSum } from './recursiveSum';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(recursiveSum()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(recursiveSum()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(recursiveSum()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(recursiveSum()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { recursiveSum(); }).toThrow();
 */

describe('recursiveSum', () => {
  it('recursiveSum should return 0', () => {
    expect(recursiveSum()).toEqual(0);
  });

  it('recursiveSum should return 0', () => {
    expect(recursiveSum([])).toEqual(0);
  });

  it('recursiveSum should return 3', () => {
    expect(recursiveSum([1, 2])).toEqual(3);
  });

  it('recursiveSum should return 55', () => {
    expect(recursiveSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(55);
  });
});
