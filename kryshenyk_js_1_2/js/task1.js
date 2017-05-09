var base = parseInt(prompt('Enter the base: ', ''));

while (isNaN(base)) {
  base = parseInt(prompt('Value, you\'ve entered, is not a number! Please enter a base as number again.', ''));
}

var power = parseInt(prompt('Enter the power: ', ''));

while (isNaN(power)) {
  power = parseInt(prompt('Value, you\'ve entered, is not a number! Please enter a power as number again.', ''));
}



function calcPow(base, power) {
  var result = 1;

  if (power > 0) {
    for (i = 1; i <= power; i++) {
      result = result * base;
    }
  } else if (power < 0) {
    power = -power;
    for (i = 1; i <= power; i++) {
      result = result * base;
    }
    result = 1 / result;
  }

  return result;
}

console.log('calcPow result is: ' + base + ' ^ ' + power + ' = ' + calcPow(base, power));
console.log('mathPow result is: ' + Math.pow(base, power));
