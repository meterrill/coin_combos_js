describe("coinCombos", function() {
  it("returns number of quarters", function() {
    expect(coinCombos(50)).to.eql([2, 0, 0, 0]);
  });

  it("returns number of dimes", function() {
    expect(coinCombos(60)).to.eql([2, 1, 0, 0]);
  });

  it("returns number of nickels", function() {
    expect(coinCombos(65)).to.eql([2, 1, 1, 0]);
  });

  it("returns number of pennies", function() {
    expect(coinCombos(66)).to.eql([2, 1, 1, 1]);
  });
});
