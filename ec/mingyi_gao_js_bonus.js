const randIntFromInterval = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const rollDice = function (input) {
  const paras = input.split("d");
  let rolls = paras[0];
  let sides = paras[1];
  let res = 0;
  for (let i = 0; i < rolls; i++) {
    res += randIntFromInterval(1, sides);
  }
  return res;
};

test_case1 = "3d6";
test_case2 = "0d1";
test_case3 = "3d1";

console.log(rollDice(test_case1));
console.log(rollDice(test_case2));
console.log(rollDice(test_case3));
