// Write a function to get the square root of a number
const sqrt = (n) => {
  const primeFacts = [];
  let tempNum = n;
  const isPrime = (num) => {
    for (let index = 2; index <= num / 2; index++) {
      if (num % index == 0) {
        return false;
      }
    }
    return true;
  };

  // extracting all the prime factors
  for (let i = 2; i <= n / 2; i++) {
    if (tempNum % i == 0 && isPrime(i)) {
      primeFacts.push(i);
    }
  }
  return primeFacts;
};

console.log(sqrt(64));
