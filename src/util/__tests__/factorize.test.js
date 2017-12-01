'use strict';

import factorize from '../factorize';

describe('The factorize function', () => {

  it('fails on non-integer input', () => {
    expect(() => factorize(12.34)).toThrowError('Input must be an integer');
  });

  it('fails on zero input', () => {
    expect(() => factorize(0)).toThrowError('Input must be positive');
  });

  if ('fails on negative input', () => {
    expect(() => factorize(-3)).toThrowError('Input must be positive');
  });

  it('correctly returns no prime factors when input is 1', () => {
    const factors = factorize(1);
    expect(factors).toEqual([]);
  });

  it('correctly returns the input when prime', () => {
    const factors = factorize(11);
    expect(factors).toEqual([{
      prime: 11,
      multiplicity: 1
    }]);
  });

  it('correctly returns prime factors for a small number', () => {
    const factors = factorize(6);
    expect(factors).toEqual([{
      prime: 2,
      multiplicity: 1
    }, {
      prime: 3,
      multiplicity: 1
    }]);
  });

  it('correctly returns prime factors for a number with prime multiplicity', () => {
    const factors = factorize(1500);
    expect(factors).toEqual([{
      prime: 2,
      multiplicity: 2
    }, {
      prime: 3,
      multiplicity: 1
    }, {
      prime: 5,
      multiplicity: 3
    }]);
  });

  it('correctly returns prime factors for a number with large factors', () => {
    const factors = factorize(10403);
    expect(factors).toEqual([{
      prime: 101,
      multiplicity: 1
    }, {
      prime: 103,
      multiplicity: 1
    }]);
  });

});
