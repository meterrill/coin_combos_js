var coinCombos = function(cents) {
  var quarters = Math.floor(cents / 25);
  var dimes = Math.floor((cents - (25 * quarters)) / 10);
  var nickels = Math.floor((cents - (25 * quarters) - (10 * dimes)) / 5);
  var pennies = Math.floor(cents - (25 * quarters) - (10 * dimes) - (5 * nickels));
  return [quarters, dimes, nickels, pennies];
};
