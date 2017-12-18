'use strict';

import Product from '../product';
import Ratio from '../ratio';

describe('The Product class', () => {

  it('can be constructed', () => {
    const product = new Product();
    expect(product).toEqual(expect.any(Product));
  });

  it('has a default value of 1', () => {
    const product = new Product();
    expect(product.a).toEqual(1);
    expect(product.b).toEqual(1);
    expect(product.value).toEqual(1);
  });

  it('has a factor a', () => {
    const product = new Product(5);
    expect(product.a).toEqual(5);
    expect(product.value).toEqual(5);
  });

  it('has a factor b', () => {
    const product = new Product(1, 4);
    expect(product.b).toEqual(4);
    expect(product.value).toEqual(4);
  });

  it('determines value by multiplying a and b', () => {
    const product = new Product(5, 4);
    expect(product.a).toEqual(5);
    expect(product.b).toEqual(4);
    expect(product.value).toEqual(20);
  });

  it('accepts Ratios as parameters', () => {
    const a = new Ratio(5, 40);
    const b = new Ratio(30, 3);
    const product = new Product(a, b);

    expect(product.a).toEqual(a);
    expect(product.b).toEqual(b);

    const value = product.value;
    expect(value).toEqual(expect.any(Ratio));
    expect(value.numerator).toEqual(150);
    expect(value.denominator).toEqual(120);
    expect(value.value).toEqual(150/120);
  });

});
