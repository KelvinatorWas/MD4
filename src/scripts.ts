/* eslint-disable no-unused-expressions */
/* eslint-disable guard-for-in */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable no-bitwise */
console.log('Ready for coding');

/*
    Write a function that takes two numbers (a and b) as argument
    Sum a and b
    Return the result
*/

const add = (a:number, b:number): number => a + b;

console.log(add(1, 2));
console.log(add(1, 10));
console.log(add(99, 1));

console.log(' ===== Addition end ===== ');

/*
    Write a function that takes a value as argument
    Return the type of the value
*/

const type = (x:string|boolean|number|null|object): string => typeof x;

console.log(type(1));
console.log(type(false));
console.log(type({}));
console.log(type(null));
console.log(type('string'));
console.log(type(['array']));

console.log(' ===== Type end ===== ');

/*
    Write a function that takes two values, say a and b, as arguments
    Return true if the two values are equal and of the same type
*/

const equal = (x:string|boolean|number|null, y:string|boolean|number|null): boolean => x === y;

console.log(equal(2, 3));
console.log(equal(3, 3));
console.log(equal(1, '1'));
console.log(equal('10', '10'));

console.log(' ===== Equal To End ===== ');

/*
    Write a function that takes a string (a) and a number (n) as arguments
    Return the nth character of 'a'
*/

const myCharAt = (a:string, n:number): string => a[n - 1];

console.log(myCharAt('abcd', 1));
console.log(myCharAt('zyxbwpl', 5));
console.log(myCharAt('gfedcba', 3));

console.log(' ===== My Char At End ===== ');

/*
    Write a function that takes a string (a) as argument
    Remove the first 3 characters of a
    Return the result
*/
const cutStart3 = (a:string): string => a.slice(3);

console.log(cutStart3('abcdefg'));
console.log(cutStart3('1234'));
console.log(cutStart3('fgedcba'));

console.log(' ===== CutStart3 End ===== ');

/*
    Write a function that takes a string as argument
    Extract the last 3 characters from the string
    Return the result
*/

const cutEnd3 = (a:string): string => a.slice(a.length - 3);

console.log(cutEnd3('abcdefg'));
console.log(cutEnd3('1234'));
console.log(cutEnd3('fgedcba'));

console.log(' ===== CutEnd3 End ===== ');

/*
    Write a function that takes a string as argument
    Extract the last 3 characters from the string
    Return the result
*/

const returnStart3 = (a:string): string => a.slice(0, 3);

console.log(returnStart3('abcdefg'));
console.log(returnStart3('1234'));
console.log(returnStart3('fgedcba'));

console.log(' ===== returnStart3 End ===== ');

/*
    Write a function that takes a string (a) as argument
    Extract the first half a
    Return the result
*/

const returnHalf = (a:string): string => a.slice(0, Math.round(a.length / 2));

console.log(returnHalf('abcdefg'));
console.log(returnHalf('1234'));
console.log(returnHalf('gedcba'));

console.log(' ===== returnHalf End ===== ');

/*
    Write a function that takes a string (a) as argument
    Remove the last 3 characters of a
    Return the result
*/

const returnEnd3 = (a:string): string => a.slice(0, a.length - 3);

console.log(returnEnd3('abcdefg'));
console.log(returnEnd3('1234'));
console.log(returnEnd3('fgedcba'));

console.log(' ===== returnEnd3 End ===== ');

/*
    Write a function that takes two numbers (a and b) as argument
    Return b percent of a
*/

const percent = (a:number, b:number): number => a * (b / 100);

console.log(percent(100, 50));
console.log(percent(10, 1));
console.log(percent(500, 25));

console.log(' ===== percent End ===== ');

/*
    Write a function that takes a number as argument
    If the number is even, return true
    Otherwise, return false
*/

// binary checks if the least segnificant digit/bit 0 or 1;
// or
// return (1 | a) !== a;  // bitwise or checks if 'or a' == 'a', if it is then uneven
const even = (a:number): boolean => (a & 1) === 0;

console.log(even(10));
console.log(even(-4));
console.log(even(5));
console.log(even(-111));

console.log(' ===== even End ===== ');

/*
    Write a function that takes two strings (a and b) as arguments
    Return the number of times a occurs in b
*/

const howMuchRepeat = (a:string, str:string): number => {
  // without using builtins
  let i = 0;
  for (const char of str) {
    i += (char === a) ? 1 : 0;
  }
  return i;
};

const str = 'how many times does the character occur in this sentence?';

console.log(howMuchRepeat('m', str));
console.log(howMuchRepeat('h', str));
console.log(howMuchRepeat('?', str));
console.log(howMuchRepeat('z', str));

console.log(' ===== howMuchRepeat End ===== ');

/*
    Write a function that takes a number (a) as argument
    If a is a whole number (has no decimal place), return true
    Otherwise, return false
*/

const isDecimal = (a:number): boolean => (a % 1) === 0;

console.log(isDecimal(4));
console.log(isDecimal(1.123));
console.log(isDecimal(1048));
console.log(isDecimal(10.48));

console.log(' ===== isDecimal End ===== ');

/*
    Write a function that takes two numbers (a and b) as arguments
    If a is smaller than b, divide a by b
    Otherwise, multiply both numbers
    Return the resulting value
*/

const iSDibM = (a:number, b:number): number => ((a < b) ? a / b : a * b);

console.log(iSDibM(10, 100));
console.log(iSDibM(90, 45));
console.log(iSDibM(8, 20));
console.log(iSDibM(2, 0.5));

console.log(' ===== iSDibM End ===== ');

/*
    Write a function that takes two strings (a and b) as arguments
    If a contains b, append b to the beginning of a
    If not, append it to the end
    Return the concatenation
*/

const strInStr = (a:string, b:string):string => (a.includes(b) ? b + a : a + b);

console.log(strInStr('cheese', 'cake'));
console.log(strInStr('lips', 's'));
console.log(strInStr('Java', 'script'));
console.log(strInStr(' think, therefore I am', 'I'));

console.log(' ===== strInStr End ===== ');

/*
    Write a function that takes a number (a) as argument
    Round a to the 2nd digit after the comma
    Return the rounded number
*/

const round = (a:number, rl = 2):number => {
  // without using inbuilts
  const multiplier:number = 10 ** rl;
  return ((a * multiplier + (a >= 0 ? 0.5 : -0.5)) | 0) / multiplier;
  // using bitwise OR | 1010 & 1100 = 1110
};

console.log(round(2.12397));
console.log(round(3.136));
console.log(round(1.12397));
console.log(round(26.1379));

console.log(' ===== round End ===== ');

/*
    Write a function that takes a number (a) as argument
    Split a into its individual digits and return them in an array
    Tip: you might want to change the type of the number for the splitting
*/

const splitNr = (a:number):number[] => {
  const na:number[] = [];
  for (const char of a.toString()) {
    na.push(Number(char));
  }
  return na;
};

console.log(splitNr(10));
console.log(splitNr(931));
console.log(splitNr(193278));

console.log(' ===== splitNr End ===== ');

/*
    It seems like something happened to these strings
    Can you figure out how to clear up the chaos?
    Write a function that joins these strings together such that they form the following words:
    'Javascript', 'Countryside', and 'Downtown'
    You might want to apply basic JS string methods such as replace(), split(), slice() etc.
*/

// semi all custom because why not, except replace because probably is a hassle to write

const customJoin = (list: string[]): string => {
  let joinedString = '';
  for (const letter of list) joinedString += letter;
  return joinedString;
};

const customSplit = (str: string): string[] => {
  const splitStringArray:string[] = [];
  for (const letter of str) splitStringArray.push(letter);
  return splitStringArray;
};

const customReverse = (list:string[]): string[] => {
  let id:number = list.length - 1;
  const reverseList:string[] = [];
  for (const letter of list) {
    reverseList[id] = letter;
    id--;
  }
  return reverseList;
};

const customToUppercase = (str: string, from = 0, to:number = str.length): string => {
  let result = '';
  for (let i = from; i < str.length; i++) {
    const char = str[i];
    if (i < to) {
      if (char >= 'a' && char <= 'z') {
        result += String.fromCharCode(char.charCodeAt(0) - 32);
      }
    } else {
      result += char;
    }
  }
  return result;
};

const fixText = (...str:string[]):string => {
  const cleanStr:string[] = [];
  str.map((word:string, i:number) => { cleanStr[i] = word.replace(/[^a-zA-Z0-9 ]/g, ''); });
  return customToUppercase(cleanStr[0], 0, 1) + customJoin(customReverse(customSplit(cleanStr[1])));
};

console.log(fixText('java', 'tpi%rcs'));
console.log(fixText('c%ountry', 'edis'));
console.log(fixText('down', 'nw%ot'));

console.log(' ===== fixText End ===== ');

/*
    This challenge is a little bit more complex
    Write a function that takes a number (a) as argument
    If a is prime, return a
    If not, return the next higher prime number
*/

const isPrime = (a: number): number => {
  const check = (n: number) => {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  while (!check(a)) {
    a++;
  }
  return a;
};

console.log(isPrime(38));
console.log(isPrime(7));
console.log(isPrime(116));
console.log(isPrime(2000));

console.log(' ===== isPrime End ===== ');

/*
    Write a function that takes two numbers, say x and y, as arguments
    Check if x is divisible by y
    If yes, return x
    If not, return the next higher natural number that is divisible by y
*/

const divisible = (x:number, y:number):number => {
  if (x % y === 0) {
    return x;
  }
  return x + (y - (x % y)) % y;
};

console.log(divisible(1, 23));
console.log(divisible(23, 23));
console.log(divisible(7, 3));
console.log(divisible(-5, 7));

console.log(' ===== divisible End ===== ');

/*
    Write a function that takes two strings (a and b) as arguments
    Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
    Return the resulting string
*/

const repeatBack = (a:string, b:string):string => {
  let str = '';
  let c = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    str = a[i] + str;
    if (c === 2) {
      str = b + str;
      c = -1;
    }
    c++;
  }
  return str;
};

console.log(repeatBack('1234567', '.'));
console.log(repeatBack('abcde', '$'));
console.log(repeatBack('zxyzxyzxyzxyzxyz', 'w'));

console.log(' ===== repeatBack End ===== ');

/*
    Write a function that takes a string as argument
    As it is, the string has no meaning
    Increment each letter to the next letter in the alphabet
    Return the correct word
*/

const shiftLetter = (str: string): string => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= 'a' && char <= 'z') {
      result += String.fromCharCode(char.charCodeAt(0) + 1);
    }
  }
  return result;
};

console.log(shiftLetter('bnchmf'));
console.log(shiftLetter('bgddrd'));
console.log(shiftLetter('sdrshmf'));

console.log(' ===== shiftLetter End ===== ');

/*
    Write a function that takes an array (a) and a value (n) as argument
    Return the nth element of 'a'
*/

const getElement = (a:number[], n:number):number => a[n - 1];

console.log(getElement([1, 2, 3, 4, 5], 3));
console.log(getElement([10, 9, 8, 7, 6], 5));
console.log(getElement([7, 2, 1, 6, 3], 1));

console.log(' ===== getElement End ===== ');

/*
    Write a function that takes an array (a) as argument
    Remove the first 3 elements of 'a'
    Return the result
*/

const removeElement = (array:number[], amount = 3):number[] => {
  const arr:number[] = [];
  for (let i = amount; i <= array.length - 1; i++) {
    arr.push(array[i]);
  }
  return arr;
};

console.log(removeElement([1, 2, 3, 4]));
console.log(removeElement([5, 4, 3, 2, 1, 0]));
console.log(removeElement([99, 1, 1]));

console.log(' ===== removeElement End ===== ');

/*
    Write a function that takes an array (a) as argument
    Extract the last 3 elements of a
    Return the resulting array
*/

const getSElement = (array:number[], a = 3, till:number = array.length):number[] => {
  const arr:number[] = [];
  let amount = array.length - a;
  if (a === 0) amount = 0;
  if (a > array.length) amount = 0;
  for (let i = amount; i <= till - 1; i++) {
    arr.push(array[i]);
  }
  return arr;
};

console.log(getSElement([1, 2, 3, 4]));
console.log(getSElement([5, 4, 3, 2, 1, 0]));
console.log(getSElement([99, 1, 1]));

console.log(' ===== getLast3Elements End ===== ');

/*
    Write a function that takes an array (a) as argument
    Extract the first 3 elements of a
    Return the resulting array
*/

console.log(getSElement([1, 2, 3, 4], 0, 3));
console.log(getSElement([5, 4, 3, 2, 1, 0], 0, 3));
console.log(getSElement([99, 1, 1], 0, 3));

console.log(' ===== getFirst3Elements End ===== ');

/*
    Write a function that takes an array (a) and a number (n) as arguments
    It should return the last n elements of a
*/

console.log(getSElement([1, 2, 3, 4, 5], 2));
console.log(getSElement([1, 2, 3], 6));
console.log(getSElement([1, 2, 3, 4, 5, 6, 7, 8], 3));

console.log(' ===== getLastElement End ===== ');

/*
    Write a function that takes an array (a) and a value (b) as argument
    The function should clean a from all occurrences of b
    Return the filtered array
*/

const contains = (a:(string|boolean|number|null)[], b:boolean|string|number): (string|boolean|number|null)[] => a.filter((value:string|boolean|number|null) => value !== b);

console.log(contains([1, 2, 3], 2));
console.log(contains([1, 2, '2'], '2'));
console.log(contains([false, '2', 1], false));
console.log(contains([1, 2, '2', 1], 1));

console.log(' ===== contains End ===== ');

/*
    Write a function that takes an array (a) as argument
    Return the number of elements in a
*/

const amountI1 = (a:number[]): number => a.length; // easy way
const amountI2 = (a:number[]): number => {
  let index = 0;
  while (a[index] !== undefined) { index++; }
  return index;
};
const amountI = (a:number[]): number => {
  let index = 0;
  for (const i of a) { index++; }
  return index;
};

console.log(amountI2([1, 2, 2, 4]));
console.log(amountI2([9, 9, 9]));
console.log(amountI2([4, 3, 2, 1, 0]));

console.log(' ===== amount End ===== ');

/*
    Write a function that takes an array of numbers as argument
    Return the number of negative values in the array
*/

const negAmount = (array: number[]): number => {
  let a = 0; // amount
  for (const i of array) {
    if (i < 0) a++;
  }
  return a;
};

console.log(negAmount([1, -2, 2, -4]));
console.log(negAmount([0, 9, 1]));
console.log(negAmount([4, -3, 2, 1, 0]));

console.log(' ===== Negative amount End ===== ');

/*
    Write a function that takes an array of numbers as argument
    It should return an array with the numbers sorted in descending order
*/

const sortBigToSmall = (arr:number[]|string[]):number[]|string[] => { // bubble sort algorithm
  const n = arr.length;
  let swap: boolean;

  do {
    swap = false;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] < arr[i + 1] && typeof arr[i] === 'number') {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }

      if (arr[i] > arr[i + 1] && typeof arr[i] === 'string') {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap);

  return arr;
};

console.log(sortBigToSmall([1, 3, 2]));
console.log(sortBigToSmall([4, 2, 3, 1]));

console.log(' ===== SortBigToSMall amount End ===== ');

/*
    Write a function that takes an array of strings as argument
    Sort the array elements alphabetically
    Return the result
*/

console.log(sortBigToSmall(['b', 'c', 'd', 'a']));
console.log(sortBigToSmall(['z', 'c', 'd', 'a', 'y', 'a', 'w']));

console.log(' ===== sortString amount End ===== ');

/*
    Write a function that takes an array of numbers as argument
    It should return the average of the numbers
*/

const avrSum = (arr:number[]) => {
  let sum = 0;
  for (const n of arr) sum += n;
  return sum / arr.length;
};

console.log(avrSum([10, 100, 40]));
console.log(avrSum([10, 100, 1000]));
console.log(avrSum([-50, 0, 50, 200]));

console.log(' ===== AverageSum End ===== ');

/*
    Write a function that takes an array of strings as argument
    Return the longest string
*/

const longestWord = (arr:string[]): string => {
  let lgW = arr[0];

  for (const word of arr) {
    lgW = word.length > lgW.length ? word : lgW;
  }
  return lgW;
};

console.log(longestWord(['help', 'me']));
console.log(longestWord(['I', 'need', 'candy']));

console.log(' ===== longestWord End ===== ');

/*
    Write a function that takes an array as argument
    It should return true if all elements in the array are equal
    It should return false otherwise
*/

const allSame = (arr:(string | number | boolean)[]):boolean => {
  const f = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (f !== arr[i]) return false;
  }
  return true;

  // or
  // const firstElement = arr[0];
  // return arr.every(element => element === firstElement);
};

console.log(allSame([true, true, true, true]));
console.log(allSame(['test', 'test', 'test']));
console.log(allSame([1, 1, 1, 2]));
console.log(allSame(['10', 10, 10, 10]));

console.log(' ===== allSame End ===== ');

/*
    Write a function that takes arguments an arbitrary number of arrays
    It should return an array containing the values of all arrays
*/

const combineArrays = (...arr: (string | number | boolean)[][]):(string | number | boolean)[] => {
  const all:(string | number | boolean)[] = [];
  for (const ar of arr) { all.push(...ar); }
  return all;
};

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
console.log(combineArrays(['a', 'b', 'c'], [4, 5, 6]));
console.log(combineArrays([true, true], [1, 2], ['a', 'b']));

console.log(' ===== combineArrays End ===== ');

/*
    Write a function that takes an array of objects as argument
    Sort the array by property b in ascending order
    Return the sorted array
*/

interface sortOObject { // or use this
    a: number;
    b: number;
}
const sortOArr = (arr:object[]) => arr.sort((a:sortOObject, b:sortOObject) => (a.b as number) - (b.b as number));

console.log(sortOArr([{ a: 1, b: 2 }, { a: 5, b: 4 }]));
console.log(sortOArr([{ a: 2, b: 10 }, { a: 5, b: 4 }]));
console.log(sortOArr([{ a: 1, b: 7 }, { a: 2, b: 1 }]));

console.log(' ===== sortObjectsAB End ===== ');

/*

    Write a function that takes two arrays as arguments
    Merge both arrays and remove duplicate values
    Sort the merge result in ascending order
    Return the resulting array
*/

const mergeAndCombine = (...arr: number[][]): number[] => {
  const all:number[] = [];
  for (const ar of arr) { all.push(...ar); }
  const dup:number[] = Array.from(new Set(all));
  return dup.sort((a, b) => a - b);
};

console.log(mergeAndCombine([1, 2, 3], [3, 4, 5]));
console.log(mergeAndCombine([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

console.log(' ===== mergeAndCombine End ===== ');

/*
    Write a function that takes an array (a) and a number (b) as arguments
    Sum up all array elements with a value greater than b
    Return the sum
*/

const sumGreaterB = (arr: number[], b: number): number => {
  let sum = 0;
  for (const num of arr) {
    if (num > b) {
      sum += num;
    }
  }
  return sum;
};

console.log(sumGreaterB([1, 2, 3, 4, 5, 6, 7], 2));
console.log(sumGreaterB([-10, -11, -3, 1, -4], -3));
console.log(sumGreaterB([78, 99, 100, 101, 401], 99));

console.log(' ===== sumGreaterB End ===== ');

/*
    Write a function that takes two numbers (min and max) as arguments
    Return an array of numbers in the range min to max
*/

const minToMax = (min:number, max:number) => {
  const arr:number[] = [];
  for (let id = 0, i = min; i <= max; i++, id++) arr[id] = i;
  return arr;
};

console.log(minToMax(2, 10));
console.log(minToMax(1, 3));
console.log(minToMax(-5, 5));
console.log(minToMax(2, 7));

console.log(' ===== minToMax End ===== ');

/*
    Write a function that takes an array of strings as argument
    Group those strings by their first letter
    Return an object that contains properties with keys representing first letters
    The values should be arrays of strings containing only the corresponding strings
    For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
    { a: ['Alf', 'Alice'], b: ['Ben']}
*/

const groupObject = (arr: string[]): { [key: string]: string[] } => {
  const group: { [key: string]: string[] } = {};

  for (const str of arr) {
    const firstLetter = str[0].toLowerCase();
    if (!group[firstLetter]) {
      group[firstLetter] = [str];
    } else {
      group[firstLetter].push(str);
    }
  }
  return group;
};

console.log(groupObject(['Alf', 'Alice', 'Ben']));
console.log(groupObject(['Ant', 'Bear', 'Bird']));
console.log(groupObject(['Berlin', 'Paris', 'Prague']));

console.log(' ===== groupObjectAlpha... End ===== ');

/*
    Write a function that takes an array with arbitrary elements and a number as arguments
    Return a new array, the first element should be either the given number itself
    or zero if the number is smaller than 6
    The other elements should be the elements of the original array
    Try not to mutate the original array
*/

/**
 * Function that takes an array with arbitrary elements and a number as arguments
 * Return a new array, the first element should be either the given number itself or zero if the number is smaller than 6
*/
const modifyArrZeroOrSix = (arr: (number | string | boolean)[], num: number): (number | string | boolean)[] => {
  const result:(number | string | boolean)[] = num >= 6 ? [num] : [0];
  result.push(...arr);
  return result;
};

console.log(modifyArrZeroOrSix([1, 2, 3], 6));
console.log(modifyArrZeroOrSix(['a', 'b'], 2));
console.log(modifyArrZeroOrSix([null, false], 11));

console.log(' ===== modifyArrZeroOrSix End ===== ');

/*
    Write a function that takes an array (a) and a value (n) as arguments
    Save every nth element in a new array
    Return the new array
*/

const getNthItem = (itemArray:number[], skip:number):number[] => {
  const arr:number[] = [];
  for (let i = skip - 1; i < itemArray.length; i += skip) {
    arr.push(itemArray[i]);
  }
  return arr;
};

console.log(getNthItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(getNthItem([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
console.log(getNthItem([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2));

console.log(' ===== getNthItem End ===== ');

/*
    Write a function that takes an object with two properties as argument
    It should return the value of the property with key country
*/

const getCountryName = (obj: { continent: string; country: string }): string => obj.country; // idk if it supposed to be done like this!

console.log(getCountryName({ continent: 'Asia', country: 'Japan' }));
console.log(getCountryName({ country: 'Sweden', continent: 'Europe' }));

console.log(' ===== getCountryName End ===== ');

/*
    Write a function that takes an object with two properties as argument
    It should return the value of the property with key 'prop-2'
    Tip: you might want to use the square brackets property accessor
*/

const getProp2 = (obj:{[key:string]:string|number;}): string|number => obj?.['prop-2'] ?? 'there is no such prop-2'; // idk if it supposed to be done like this!

console.log(getProp2({ one: 1, 'prop-2': 2 }));
console.log(getProp2({ 'prop-2': 'two', prop: 'test' }));

console.log(' ===== getProp2 End ===== ');

/*
    Write a function that takes an object with two properties and a string as arguments
    It should return the value of the property with key equal to the value of the string
*/

const getItemFromKey = (obj: {[key:string]:string|number;}, key:string): string|number => obj?.[key] ?? `there is no such key as:[ ${key} ]`; // idk if it supposed to be done like this!

console.log(getItemFromKey({ continent: 'Asia', country: 'Japan' }, 'continent'));
console.log(getItemFromKey({ country: 'Sweden', continent: 'Europe' }, 'country'));

console.log(' ===== getItemFromKey End ===== ');

/*
Write a function that takes an object (a) and a string (b) as argument
Return true if a has a property with key b
Return false otherwise

*/

const objectHasItem = (obj: {[key:string]:string|number;}, key:string): boolean => (obj ? obj[key] !== undefined : false); // idk if it supposed to be done like this!

console.log(objectHasItem({ a: 1, b: 2, c: 3 }, 'b'));
console.log(objectHasItem({ x: 'a', y: 'b', z: 'c' }, 'a'));
console.log(objectHasItem({ x: 'a', y: 'b', z: 'c' }, 'z'));

console.log(' ===== objectHasItem End ===== ');

/*
Write a function that takes an object (a) and a string (b) as argument
Return true if a has a property with key b
Return false otherwise

*/

const returnObject = (item:string, key = 'key'): {[key:string]:string} => ({ [key === 'key' ? key : item]: key === 'key' ? item : key });// idk if it supposed to be done like this!

console.log(returnObject('a'));
console.log(returnObject('z'));
console.log(returnObject('b'));

console.log(' ===== returnObject End ===== ');

/*
    Write a function that takes two strings (a and b) as arguments
    Create an object that has a property with key 'a' and a value of 'b'
    Return the object
*/

console.log(returnObject('a', 'b'));
console.log(returnObject('z', 'x'));
console.log(returnObject('b', 'w'));

console.log(' ===== returnObjectWithCustomKey End ===== ');

/*
    Write a function that takes two arrays (a and b) as arguments
    Create an object that has properties with keys 'a' and corresponding values 'b'
    Return the object
*/

const makeObjFromArray = (a: (string | number)[], b: (string | number)[]): { [key: string]: string | number } => {
  const result: { [key: string]: string | number } = {};
  for (let i = 0; i < a.length; i++) {
    result[a[i]] = b[i];
  }
  return result;
};

console.log(makeObjFromArray(['a', 'b', 'c'], [1, 2, 3]));
console.log(makeObjFromArray(['w', 'x', 'y', 'z'], [10, 9, 5, 2]));
console.log(makeObjFromArray([1, 'b'], ['a', 2]));

console.log(' ===== makeObjFromArray End ===== ');

/*
    Write a function that takes an object (a) as argument
    Return an array with all object keys
*/

const returnObjectKeys = (obj: { [key: string]: number }): string[] => Object.keys(obj);

console.log(returnObjectKeys({ a: 1, b: 2, c: 3 }));
console.log(returnObjectKeys({
  j: 9, i: 2, x: 3, z: 4,
}));
console.log(returnObjectKeys({ w: 15, x: 22, y: 13 }));

console.log(' ===== returnObjectKeys End ===== ');

/*
    Write a function that takes an object (a) as argument
    Return the sum of all object values
*/

const sumOfObjectValues = (obj: { [key: string]: number }): number => {
  const values = Object.values(obj);
  return values.reduce((a, v) => a + v, 0);
};

console.log(sumOfObjectValues({ a: 1, b: 2, c: 3 }));
console.log(sumOfObjectValues({
  j: 9, i: 2, x: 3, z: 4,
}));
console.log(sumOfObjectValues({ w: 15, x: 22, y: 13 }));

console.log(' ===== sumOfObjectValues End ===== ');

/*
    Write a function that takes an object as argument
    It should return an object with all original object properties
    except for the property with key 'b'
*/

const removeB = (obj: { [key: string]: number }): { [key: string]: number } => {
  const result: { [key: string]: number } = { ...obj };
  delete result.b;
  return result;
};

console.log(removeB({ a: 1, b: 7, c: 3 }));
console.log(removeB({ b: 0, a: 7, d: 8 }));
console.log(removeB({
  e: 6, f: 4, b: 5, a: 3,
}));

console.log(' ===== removeB End ===== ');

/*
    Write a function that takes two objects as arguments
    Unfortunately, the property 'b' in the second object has the wrong key
    should be named 'd' instead
    Merge both objects and correct the wrong property name
    Return the resulting object
    It should have the properties 'a', 'b', 'c', 'd', and 'e'
*/

const mergeObjectsC = (obj1: { [key: string]: number }, obj2: { [key: string]: number }): { [key: string]: number } => { // not the best but works, im sleepy
  const merged: { [key: string]: number } = { ...obj1 };
  for (const key in obj2) {
    if (key === 'b') {
      merged.d = obj2.b;
    } else {
      merged[key] = obj2[key];
    }
  }
  return merged;
};

console.log(mergeObjectsC({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
console.log(mergeObjectsC({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

console.log(' ===== mergeObjectsC End ===== ');

/*
    Write a function that takes an object (a) and a number (b) as arguments
    Multiply all values of 'a' by 'b'
    Return the resulting object
*/

const multObj = (a:{[key:string]:number}, n:number) => {
  for (const key in a) { a[key] *= n; }
  return a;
};

console.log(multObj({ a: 1, b: 2, c: 3 }, 3));
console.log(multObj({
  j: 9, i: 2, x: 3, z: 4,
}, 10));
console.log(multObj({ w: 15, x: 22, y: 13 }, 6));

console.log(' ===== multObj End ===== ');

/*
    Write a function that takes an object as argument
    Somehow, the properties and keys of the object got mixed up
    Swap the Javascript object's key with its values and return the resulting object
*/

const whitespaceKeyToNull = (a:{[key:string]:string}) => {
  for (const key in a) {
    a[key] = a[key].replace(/\s/g, '').length < 1 ? null : a[key];
  }
  return a;
};
console.log(whitespaceKeyToNull({ a: 'a', b: 'b', c: '' }));
console.log(whitespaceKeyToNull({
  a: '', b: 'b', c: ' ', d: 'd',
}));
console.log(whitespaceKeyToNull({
  a: 'a', b: 'b ', c: ' ', d: '',
}));

console.log(' ===== whitespaceKeyToNull End ===== ');

/*
    Write a function that takes an object as argument containing properties with personal information
    Extract firstName, lastName, size, and weight if available
    If size or weight is given transform the value to a string
    Attach the unit cm to the size
    Attach the unit kg to the weight
    Return a new object with all available properties that we are interested in
*/

const updatePropObj = (obj:{[key:string]:string|number}) => {
    interface iData {
        fn?: string;
        ls?: string;
        size?: string;
        weight?:string;
    }

    const nObj:iData = {};
    for (const key in obj) {
      if (key === 'fn') nObj.fn = obj[key] as string;
      else if (key === 'ln') nObj.ls = obj[key] as string;
      else if (key === 'size') nObj.size = `${obj[key]}cm`;
      else if (key === 'weight') nObj.weight = `${obj[key]}kg`;
      else {
        // eslint-disable-next-line no-continue
        continue;
      }
    }
    return nObj;
};

console.log(updatePropObj({
  fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67,
}));
console.log(updatePropObj({
  fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102,
}));
console.log(updatePropObj({
  fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71,
}));
console.log(updatePropObj({
  fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de',
}));

console.log(' ===== updatePropObj End ===== ');

/*
    Write a function that takes an array of objects and a string as arguments
    Add a property with key 'continent' and value equal to the string to each of the objects
    Return the new array of objects
    Tip: try not to mutate the original array
*/

const addContinentToObject = (arr:{[key:string]:string}[], continent:string) => {
  const copy:{[key:string]:string}[] = [...arr];
  for (const object of copy) {
    object.continent = continent;
  }
  return copy;
};

console.log(addContinentToObject([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));
console.log(addContinentToObject([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe'));

console.log(' ===== addContinentToObject End ===== ');

/*
    Write a function that takes an array of numbers as argument
    Convert the array to an object
    It should have a key for each unique value of the array
    The corresponding object value should be the number of times the key occurs within the array
*/

function keyOccurs(arr: number[]): { [key: number]: number } {
  const c: { [key: number]: number } = {};
  for (const num of arr) {
    c[num] ? c[num]++ : c[num] = 1;
  }
  return c;
}

console.log(keyOccurs([1, 2, 2, 3]));
console.log(keyOccurs([9, 9, 9, 99]));
console.log(keyOccurs([4, 3, 2, 1]));

console.log(' ===== keyOccurs End ===== ');

/*
    Write a function that takes two date instances as arguments
    It should return true if the dates are equal
    It should return false otherwise
*/

const checkDates = (d1:Date, d2:Date):boolean => d1.getTime() === d2.getTime();

console.log(checkDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
console.log(checkDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));
console.log(checkDates(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));

console.log(' ===== checkDates End ===== ');

const getDays = (d1:Date, d2:Date):number => {
  const msAd = 24 * 60 * 60 * 1000;
  const difMs = Math.abs(d1.getTime() - d2.getTime());
  const days = Math.round(difMs / msAd);
  return days;
};

console.log(getDays(new Date('2020-06-11'), new Date('2020-06-01')));
console.log(getDays(new Date('2000-01-01'), new Date('2020-06-01')));

console.log(' ===== getDays End ===== ');

/*
    Write a function that takes two date instances as argument
    It should return true if they fall on the exact same day
    It should return false otherwise
*/

console.log(checkDates(new Date('2000/01/01'), new Date('2000/01/01')));
console.log(checkDates(new Date('2000/01/01'), new Date('2000/01/02')));
console.log(checkDates(new Date('2001/01/01'), new Date('2000/01/01')));
console.log(checkDates(new Date('2000/11/01'), new Date('2000/01/01')));

console.log(' ===== checkDate2 End ===== ');

/*
    Write a function that takes two number arrays as parameters
    and return an array which contains elements from both
    arrays
*/

const spreadArrayCombine = (...arr:number[][]) => {
  const nArr:number[] = [];
  for (const i of arr) {
    nArr.push(...i);
  }
  return nArr;
};

console.log(spreadArrayCombine([1, 2], [3, 4]));
console.log(spreadArrayCombine([1, 2], [3, 4, 5, 6]));

console.log(' ===== spreadArrayCombine End ===== ');

/*
    Write a function that takes an array and a string as parameters
    and return an array which contains all elements from the given array
    and the given string as the last element
*/

const addSpreadElementArr = (arr:(string|number|boolean)[], ...items:(string|number|boolean)[]) => [...arr, ...items];

console.log(addSpreadElementArr(['Apple', 'Orange', 'Banana'], 'Kiwi'));

console.log(' ===== addSpreadElementArr End ===== ');

/*
    Write a function that takes an array and a string as parameters
    and return an array which contains all elements from the given array
    and the given string as the first element
*/

const addSpreadElementArrR = (arr:(string|number|boolean)[], ...items:(string|number|boolean)[]) => [...items, ...arr];

console.log(addSpreadElementArrR(['Apple', 'Orange', 'Banana'], 'Kiwi'));

console.log(' ===== addSpreadElementArrRev End ===== ');

/*
    Write a function that takes two objects as parameters
    and return an object which contains properties from both
    objects
*/
const objectCombiner = (obj1: { [key: string]: number }, obj2: { [key: string]: number }): { [key: string]: number } => ({ ...obj1, ...obj2 });

console.log(objectCombiner({ a: 1, b: 2 }, { c: 3, d: 4 }));
console.log(objectCombiner({ a: 1, b: 2 }, {
  c: 3, d: 4, e: 5, f: 6,
}));

console.log(' ===== objectCombiner End ===== ');

/*
    Write a function that takes an object and a string as parameters
    and return an object which contains properties from the given object
    and a new property favoriteMovie with the value equal to the given string
*/

const addFavMovie = (obj: { [key: string]: string|number }, favoriteMovie: string) => ({ ...obj, favoriteMovie });

console.log(addFavMovie({ eyeColor: 'green', age: 10 }, 'Garfield'));
console.log(addFavMovie({ eyeColor: 'blue', age: 15 }, 'Twilight'));

console.log(' ===== addFavMovie End ===== ');
