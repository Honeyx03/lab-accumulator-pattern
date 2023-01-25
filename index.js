/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let isNumber = true;
  for (let index = 0; index < rolls.length; index++) {
    const number = rolls[index];
    if (typeof number !== 'number'){
       return isNumber = false;
    } else {
      isNumber;
    }
  }
  return isNumber;
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let result = null
  for (let index = 0; index < rolls.length; index++) {
    const valFind = rolls[index];
    if (valFind === value) {
      return  value
    } else {
      result = null
    }
  } 
  return result
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let newArray = []
  for (let index = 0; index < rolls.length; index++) {
    const value = rolls[index];
    if (lowest <= value){
      newArray.push(value)
    } else {
    }
  } return newArray
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls){
  let rollObject= {};
  for (const roll of rolls){
      if(!rollObject[roll])
   { rollObject[roll] = 1;
   } else {
    rollObject[roll]++;
   }
  }
  return rollObject;
}



// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
