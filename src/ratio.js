'use strict';

import gcd from './util/gcd';

export default class Ratio {
  constructor(num = 1, denom = 1) {
    if (num === 0 && denom === 0) {
      num = NaN;
      denom = NaN;
    } else if (denom === 0) {
      num = (num > 0) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
      denom = 1;
    } else if (num === 0) {
      denom = 1;
    } else if (denom < 0) {
      num = 0 - num;
      denom = 0 - denom;
    }

    Object.defineProperties(this, {
      numerator: { value: num },
      denominator: { value: denom },
      value: {
        get: () => num / denom
      }
    });

    this.simplify = this.simplify.bind(this);
  }

  simplify() {
    const factor = gcd(this.numerator, this.denominator);
    return new Ratio(this.numerator / factor, this.denominator / factor);
  }
}
