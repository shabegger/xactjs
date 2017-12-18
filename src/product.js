'use strict';

import Ratio from './ratio';

export default class Product {
  constructor(a = 1, b = 1) {
    const getValue = () => {
      if (Number.isInteger(a) && Number.isInteger(b)) return a * b;

      let num = 1;
      let denom = 1;

      if (a instanceof Ratio) {
        num *= a.numerator;
        denom *= a.denominator;
      } else if (Number.isInteger(a)) {
        num *= a;
      }

      if (b instanceof Ratio) {
        num *= b.numerator;
        denom *= b.denominator;
      } else if (Number.isInteger(b)) {
        num *= b;
      }

      return new Ratio(num, denom);
    };

    Object.defineProperties(this, {
      a: { value: a },
      b: { value: b },
      value: {
        get: getValue
      }
    });
  }
}
