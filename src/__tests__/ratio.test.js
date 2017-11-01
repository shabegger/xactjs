'use strict';

import Ratio from '../ratio';

describe('The Ratio class', () => {

  it('can be constructed', () => {
    const ratio = new Ratio();
    expect(ratio).toEqual(expect.any(Ratio));
  });

  it('has a default value of 1', () => {
    const ratio = new Ratio();
    expect(ratio.value).toEqual(1);
  });

});
