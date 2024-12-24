// Examples of JavaScript Array Methods

// concat() - Joins two or more arrays and returns a new array
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2);
console.log('concat:', combinedArray); // [1, 2, 3, 4, 5, 6]

// copyWithin() - Copies part of an array to another location within the array
const copyWithinArray = [1, 2, 3, 4, 5];
copyWithinArray.copyWithin(0, 3);
console.log('copyWithin:', copyWithinArray); // [4, 5, 3, 4, 5]

// entries() - Returns a key/value pair Array Iteration Object
const entriesArray = ['a', 'b', 'c'];
const iterator = entriesArray.entries();
for (let entry of iterator) {
  console.log('entries:', entry);
}

// every() - Checks if every element in an array passes a test
const isBelowThreshold = [1, 30, 29, 10, 13].every(num => num < 40);
console.log('every:', isBelowThreshold); // true

// fill() - Fills the elements in an array with a static value
const fillArray = [1, 2, 3, 4, 5];
fillArray.fill(0, 1, 4);
console.log('fill:', fillArray); // [1, 0, 0, 0, 5]

// filter() - Creates a new array with elements that pass a test
const words = ['spray', 'limit', 'elite', 'exuberant'];
const filteredWords = words.filter(word => word.length > 5);
console.log('filter:', filteredWords); // ['exuberant']

// find() - Returns the value of the first element that passes a test
const findArray = [5, 12, 8, 130, 44];
const found = findArray.find(num => num > 10);
console.log('find:', found); // 12

// findIndex() - Returns the index of the first element that passes a test
const findIndexArray = [5, 12, 8, 130, 44];
const index = findIndexArray.findIndex(num => num > 10);
console.log('findIndex:', index); // 1

// forEach() - Calls a function for each array element
const forEachArray = ['a', 'b', 'c'];
forEachArray.forEach(element => console.log('forEach:', element));

// from() - Creates an array from an object
const string = 'hello';
const fromArray = Array.from(string);
console.log('from:', fromArray); // ['h', 'e', 'l', 'l', 'o']

// includes() - Checks if an array contains the specified element
const includesArray = [1, 2, 3];
console.log('includes:', includesArray.includes(2)); // true

// indexOf() - Returns the first index of a specified value
const indexOfArray = [2, 9, 9];
console.log('indexOf:', indexOfArray.indexOf(9)); // 1

// isArray() - Checks whether an object is an array
console.log('isArray:', Array.isArray([1, 2, 3])); // true

// join() - Joins all elements of an array into a string
const joinArray = ['Fire', 'Air', 'Water'];
console.log('join:', joinArray.join(' - ')); // 'Fire - Air - Water'

// keys() - Returns an Array Iteration Object with the keys
const keysArray = ['a', 'b', 'c'];
const keys = keysArray.keys();
for (let key of keys) {
  console.log('keys:', key);
}

// lastIndexOf() - Returns the last index of a specified value
const lastIndexOfArray = [2, 5, 9, 2];
console.log('lastIndexOf:', lastIndexOfArray.lastIndexOf(2)); // 3

// map() - Creates a new array with the result of calling a function for each array element
const mapArray = [1, 2, 3, 4];
const squaredArray = mapArray.map(num => num * num);
console.log('map:', squaredArray); // [1, 4, 9, 16]

// pop() - Removes the last element of an array and returns that element
const popArray = [1, 2, 3];
const poppedElement = popArray.pop();
console.log('pop:', poppedElement, popArray); // 3, [1, 2]

// push() - Adds new elements to the end of an array and returns the new length
const pushArray = [1, 2, 3];
const newLength = pushArray.push(4);
console.log('push:', newLength, pushArray); // 4, [1, 2, 3, 4]

// reduce() - Reduces the values of an array to a single value (left-to-right)
const reduceArray = [1, 2, 3, 4];
const sum = reduceArray.reduce((acc, curr) => acc + curr, 0);
console.log('reduce:', sum); // 10

// reduceRight() - Reduces the values of an array to a single value (right-to-left)
const reduceRightArray = [1, 2, 3, 4];
const product = reduceRightArray.reduceRight((acc, curr) => acc * curr, 1);
console.log('reduceRight:', product); // 24

// reverse() - Reverses the order of the elements in an array
const reverseArray = [1, 2, 3];
reverseArray.reverse();
console.log('reverse:', reverseArray); // [3, 2, 1]

// shift() - Removes the first element of an array and returns that element
const shiftArray = [1, 2, 3];
const shiftedElement = shiftArray.shift();
console.log('shift:', shiftedElement, shiftArray); // 1, [2, 3]

// slice() - Selects a part of an array and returns the new array
const sliceArray = [1, 2, 3, 4, 5];
const slicedArray = sliceArray.slice(1, 4);
console.log('slice:', slicedArray); // [2, 3, 4]

// some() - Checks if any of the elements in an array pass a test
const someArray = [1, 2, 3, 4, 5];
const hasEven = someArray.some(num => num % 2 === 0);
console.log('some:', hasEven); // true

// sort() - Sorts the elements of an array
const sortArray = [3, 1, 4, 1, 5];
sortArray.sort((a, b) => a - b);
console.log('sort:', sortArray); // [1, 1, 3, 4, 5]

// splice() - Adds/Removes elements from an array
const spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(2, 1, 'a', 'b');
console.log('splice:', spliceArray); // [1, 2, 'a', 'b', 4, 5]

// toString() - Converts an array to a string and returns the result
const toStringArray = [1, 2, 3];
console.log('toString:', toStringArray.toString()); // '1,2,3'

// unshift() - Adds new elements to the beginning of an array and returns the new length
const unshiftArray = [1, 2, 3];
const newLengthUnshift = unshiftArray.unshift(0);
console.log('unshift:', newLengthUnshift, unshiftArray); // 4, [0, 1, 2, 3]

// valueOf() - Returns the primitive value of an array
const valueOfArray = [1, 2, 3];
console.log('valueOf:', valueOfArray.valueOf()); // [1, 2, 3]
