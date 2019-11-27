var countBits = function (n) {
  // Program Me
  let number = n;
  let counter = 0;
  const binary = [];

  if (number === 0) {
    binary.push(0);
  } else {
    while (number >= 1) {
      if (number % 2 === 1) {
        binary.push(1);
        number = (number / 2) - 0.5;
      } else {
        binary.push(0);
        number = (number / 2);
      }
    }
  }
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === 1) {
      counter++;
    }
  }
  return counter;
};