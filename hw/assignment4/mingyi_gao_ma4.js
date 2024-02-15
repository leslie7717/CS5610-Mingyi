const student_name = "MINGYI GAO";
// PROBLEM 1 - findBiggestNumber

/*
  findBiggestNumber
    search the input (map) for the biggest number
  input
    map, an array of array of integers, nulls or undefined
  output
    an integer representing the biggest number in int.  
    if there is no valid output, return undefined 
  note: I have provided some code within the function to help you out
*/
function findBiggestNumber(map) {
  /*
        Insert code here!
    */
  let res = -Infinity;
  for (const arr of map) {
    for (const element of arr) {
      if (element !== null && element !== undefined) {
        res = Math.max(res, element);
      }
    }
  }
  if (res === -Infinity) {
    return undefined;
  }
  return res;
}

// PROBLEM 2 - balancedString

/*
  balancedString
    returns true if the number of all of the characters in the string
    is the same
    ex - balancedString("xxxyyzzz") => false
    ex - balancedString("abccbaabccba") => true
  input
    str, a string made of up 0 to infinite lower-case characters.  
    will never be undefined, null, etc.
  output
    true if the number of all the characters in the string is the same
    otherwise, false
*/

function balancedString(str) {
  const charCounts = new Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    charCounts[str[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  let firstNonZeroCount = charCounts.find((count) => count > 0);
  if (!firstNonZeroCount) return true;
  for (let i = 1; i < charCounts.length; i++) {
    if (charCounts[i] !== 0 && charCounts[i] !== firstNonZeroCount) {
      return false;
    }
  }
  return true;
}

// PROBLEM 3 - additivePersistence

/*
  additivePersistence
    calculates and returns a number that represents how many loops you have to do 
    summing all of its digits until you get a single digit number
    explanation: https://mathworld.wolfram.com/AdditivePersistence.html
    ex - additivePersistence(1234) => 2
  input
    num, an integer between 1 and Number.POSITIVE_INFINITY
  output
    an integer as described above
*/
function additivePersistence(num) {
  res = 0;
  while (num > 9) {
    let new_num = 0;
    while (num != 0) {
      let digits = Math.floor(num / 10);
      remainder = num - digits * 10;
      new_num += remainder;
      num -= remainder;
      num /= 10;
    }
    num = new_num;
    res++;
  }
  return res;
}

// TEST 1 - findBiggestNumber
const grid1 = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
];

const grid2 = [
  [1, 1, 4, 1],
  [1, 6],
  [1, 2, 1, -3],
];

const grid3 = [
  [1, null, 1, null],
  [1, 0],
  [1, 2, 1, undefined],
];

const grid4 = [[-1, null], [], [0, -2, -1]];

const grid5 = [[], [], []];

console.log("Starting tests for " + student_name);

console.assert(findBiggestNumber(grid1) === 12, "biggest number should be 12");
console.assert(findBiggestNumber(grid2) === 6, "biggest number should be 6");
console.assert(findBiggestNumber(grid3) === 2, "biggest number should be 2");
console.assert(findBiggestNumber(grid4) === 0, "biggest number should be 0");
console.assert(
  findBiggestNumber(grid5) === undefined,
  "biggest number response should be undefined"
);

// TEST 2 - balancedString
console.assert(balancedString("xxxyyyzzz") === true, "'xxxyyyzzz' is balanced");
console.assert(
  balancedString("xxxyyyzzzz") === false,
  '"xxxyyyzzzz" is not balanced'
);
console.assert(
  balancedString("abccbaabccba") === true,
  '"abccbaabccba" is balanced'
);
console.assert(
  balancedString("abcdefghijklmnopqrstuvwxyz") === true,
  '"abcdefghijklmnopqrstuvwxyz" is balanced'
);
console.assert(balancedString("pqq") === false, '"pqq" is not balanced');
console.assert(
  balancedString("fdedfdeffeddefeeeefddf") === false,
  '"fdedfdeffeddefeeeefddf" is not balanced'
);
console.assert(balancedString("www") === true, '"www is balanced');
console.assert(balancedString("x") === true, '"x" is balanced');
console.assert(balancedString("") === true, "'' is balanced");

// TEST 3 - additivePersistence
console.assert(
  additivePersistence(1234) === 2,
  "the additive 1234 should be 2"
);
console.assert(additivePersistence(13) === 1, "the additive 13 should be 1");
console.assert(
  additivePersistence(9876) === 2,
  "the additive 9876 should be 2"
);
console.assert(additivePersistence(199) === 3, "the additive 199 should be 3");
console.assert(
  additivePersistence(1679583) === 3,
  "the additive 1679583 should be 3"
);

console.log(
  "code execution complete - if no errors are listed above, you are good to go!"
);
