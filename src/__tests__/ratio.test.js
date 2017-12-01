'use strict';

import Ratio from '../ratio';

describe('The Ratio class', () => {

  it('can be constructed', () => {
    const ratio = new Ratio();
    expect(ratio).toEqual(expect.any(Ratio));
  });

  it('has a default value of 1', () => {
    const ratio = new Ratio();
    expect(ratio.numerator).toEqual(1);
    expect(ratio.denominator).toEqual(1);
    expect(ratio.value).toEqual(1);
  });

  it('has a numerator', () => {
    const ratio = new Ratio(5);
    expect(ratio.numerator).toEqual(5);
    expect(ratio.value).toEqual(5);
  });

  it('has a denominator', () => {
    const ratio = new Ratio(1, 4);
    expect(ratio.denominator).toEqual(4);
    expect(ratio.value).toEqual(1/4);
  });

  it('can be simplified', () => {
    const ratio = new Ratio(6, 9);
    const simplified = ratio.simplify();
    expect(simplified).toEqual(expect.any(Ratio));
    expect(simplified.numerator).toEqual(2);
    expect(simplified.denominator).toEqual(3);
    expect(simplified.value).toEqual(2/3);
  });

  it('conventionally moves negatives to the numerator', () => {
    const ratio1 = new Ratio(-3, 4);
    expect(ratio1.numerator).toEqual(-3);
    expect(ratio1.denominator).toEqual(4);
    expect(ratio1.value).toEqual(-3/4);

    const ratio2 = new Ratio(5, -6);
    expect(ratio2.numerator).toEqual(-5);
    expect(ratio2.denominator).toEqual(6);
    expect(ratio2.value).toEqual(-5/6);

    const ratio3 = new Ratio(-6, -7);
    expect(ratio3.numerator).toEqual(6);
    expect(ratio3.denominator).toEqual(7);
    expect(ratio3.value).toEqual(6/7);

    const ratio4 = new Ratio(6, -9);
    const simplified = ratio4.simplify();
    expect(simplified.numerator).toEqual(-2);
    expect(simplified.denominator).toEqual(3);
    expect(simplified.value).toEqual(-2/3);
  });

  it('conventionally sets denominator to 1 for a 0 numerator', () => {
    const ratio = new Ratio(0, -247);
    expect(ratio.numerator).toEqual(0);
    expect(ratio.denominator).toEqual(1);
    expect(ratio.value).toEqual(0);
  });

  it('conventionally sets numerator to infinity for 0 denominator', () => {
    const ratio1 = new Ratio(3, 0);
    expect(ratio1.numerator).toEqual(Number.POSITIVE_INFINITY);
    expect(ratio1.denominator).toEqual(1);
    expect(ratio1.value).toEqual(Number.POSITIVE_INFINITY);

    const ratio2 = new Ratio(-5, 0);
    expect(ratio2.numerator).toEqual(Number.NEGATIVE_INFINITY);
    expect(ratio2.denominator).toEqual(1);
    expect(ratio2.value).toEqual(Number.NEGATIVE_INFINITY);
  });

  it('conventionally sets numerator and denominator to NaN for indeterminate numbers', () => {
    const ratio = new Ratio(0, 0);
    expect(ratio.numerator).toEqual(NaN);
    expect(ratio.denominator).toEqual(NaN);
    expect(ratio.value).toEqual(NaN);
  });

});
