'use strict';

const primes = new Set([ 2, 3, 5, 7, 11, 13, 17, 19 ]);

// How many times does 2 evenly divide n
function exp2(n) {
  let count = 0;

  while ((n & 1) === 0) {
    n = n >> 1;
    count++;
  }

  return count;
}

function primeWitness(n, a, d, r) {
  const nMinusOne = n - 1;

  let x = (a ** d) % n;

  if (x === 1 || x === nMinusOne) return true;

  while (--r) {
    x = (x * x) % n;
    if (x === 1) return false;
    if (x === nMinusOne) return true;
  }
}

// An implementation of Miller-Rabin primality test
function isPrime(n) {
  if (primes.has(n)) return true;

  const nMinusOne = n - 1;
  const s = exp2(nMinusOne);
  const d = nMinusOne / (1 << s);
  const lnN = Math.log(n);
  const maxA = Math.min(nMinusOne, Math.floor(2 * lnN * lnN));

  let a;
  for (a = 2; a <= maxA; a++) {
    if (!primeWitness(n, a, d, s)) return false;
  }

  primes.add(n);
  return true;
}

// Greatest Common Denominator
function gcd(a, b) {
  let remainder;

  while (b != 0) {
    remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

// Polynomial mod n for Pollard
function g(x, n) {
  return (x * x + 1) % n;
}

// An implementation of Pollard's Rho Algorithm for integer factorization
function getFactor(n, s = 2) {
  if (isPrime(n)) return n;

  const sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt)) return sqrt;

  let x = s,
      y = s,
      d = 1;

  while (d === 1) {
    x = g(x, n);
    y = g(g(y, n), n);
    d = gcd(Math.abs(y - x), n);
  }

  if (d === n) {
    return getFactor(n, s + 1);
  }

  return d;
}

function checkFactor(f, factors) {
  if (f === 1) return;

  if (isPrime(f)) {
    if (!factors.has(f)) factors.set(f, 1);
    else factors.set(f, factors.get(f) + 1);
  } else {
    factorizeEngine(f, factors);
  }
}

function factorizeEngine(n, factors) {
  const a = getFactor(n);
  const b = n / a;

  checkFactor(a, factors);
  checkFactor(b, factors);
}

export default function factorize(number) {
  if (!Number.isInteger(number)) {
    throw new Error('Input must be an integer');
  }

  if (number < 1) {
    throw new Error('Input must be positive');
  }

  if (number === 1) return [];

  const factors = new Map();

  const twoCount = exp2(number);
  if (twoCount) {
    factors.set(2, twoCount);
  }

  factorizeEngine(number >> twoCount, factors);

  const result = [];
  factors.forEach((val, key) => result.push({
    prime: key,
    multiplicity: val
  }));

  return result.sort((a, b) => a.prime - b.prime);
}
