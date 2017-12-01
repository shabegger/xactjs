'use strict';

import gcd from '../gcd';

describe('The gcd function', () => {

  it('fails on non-integer input', () => {
    expect(() => gcd(12.34, 5)).toThrowError('Input must be an integer');
    expect(() => gcd(12, 3.45)).toThrowError('Input must be an integer');
  });

  it('fails on zero input', () => {
    expect(() => gcd(0, 6)).toThrowError('Input must be non-zero');
    expect(() => gcd(7, 0)).toThrowError('Input must be non-zero');
  });

  it('correctly returns 1 for co-primes', () => {
    expect(gcd(101, 203)).toEqual(1);
  });

  it('correctly returns the GCD for non co-primes', () => {
    expect(gcd(126, 189)).toEqual(63);
    expect(gcd(204, 153)).toEqual(51);
  });

  it('correctly returns the value when two equal inputs are given', () => {
    expect(gcd(547, 547)).toEqual(547);
  });

  it('correctly returns the positive GCD for negative numbers', () => {
    expect(gcd(-126, 189)).toEqual(63);
    expect(gcd(204, -153)).toEqual(51);
  });

});
