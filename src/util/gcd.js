'use strict';

// Euclidean algorithm
export default function gcd(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('Input must be an integer');
  }

  if (a === 0 || b === 0) {
    throw new Error('Input must be non-zero');
  }

  a = Math.abs(a);
  b = Math.abs(b);

  if (a < b) {
    let temp = a;
    a = b;
    b = temp;
  }

  const r = a % b;

  if (r === 0) return b;
  return gcd(b, r);
}
