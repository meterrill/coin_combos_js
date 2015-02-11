var coinCombos = function(cents) {
  var quarters = Math.floor(cents / 25);
  var dimes = Math.floor((cents - (25 * quarters)) / 10);
  var nickels = Math.floor((cents - (25 * quarters) - (10 * dimes)) / 5);
  var pennies = Math.floor(cents - (25 * quarters) - (10 * dimes) - (5 * nickels));
  return [quarters, dimes, nickels, pennies];
};

$(document).ready(function() {
  $("form#coins").submit(function(event) {
    var change = parseInt($("input#change").val());
    var changeArray = coinCombos(change);

    $(".quarters").text(changeArray[0]);
    $(".dimes").text(changeArray[1]);
    $(".nickels").text(changeArray[2]);
    $(".pennies").text(changeArray[3]);

    $("#result").show();
    event.preventDefault();
  });
});
