'use strict';

const primes = new Set([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]);
const sequentialPrimes = new Set(primes);

export default function factorize(number) {
  if (!Number.isInteger(number)) {
    throw new Error('Input must be an integer');
  }

  if (number < 1) {
    throw new Error('Input must be positive');
  }

  if (primes.has(number)) {
    return [{
      prime: number,
      multiplicity: 1
    }];
  }

  const result = [];

  const maxFactor = Math.floor(Math.sqrt(number));
  const primeIter = sequentialPrimes.values();

  const checkFactor = () => {
    const factor = {
      prime: nextPrime,
      multiplicity: 0
    };

    while (number % nextPrime === 0) {
      number /= nextPrime;
      factor.multiplicity++;
    }

    return factor;
  };

  let nextIter = primeIter.next();
  let nextPrime = nextIter.value;
  while (!nextIter.done && nextPrime <= maxFactor) {
    const factor = checkFactor();
    if (factor.multiplicity) result.push(factor);

    nextIter = primeIter.next();
    if (!nextIter.done) nextPrime = nextIter.value;
  }

  nextPrime++;
  while (nextPrime <= maxFactor) {
    const factor = checkFactor();
    if (factor.multiplicity) {
      primes.add(nextPrime);
      result.push(factor);
    }

    nextPrime++;
  }

  if (number !== 1) {
    primes.add(number);
    result.push({
      prime: number,
      multiplicity: 1
    });
  }

  return result;
}
